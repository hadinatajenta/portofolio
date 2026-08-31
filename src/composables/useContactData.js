import { ref } from 'vue'
import { apiGet } from '../services/apiClient'
import { localDb } from '../data/localDb'

const fallbackSocialLinks = Array.isArray(localDb?.socialLinks) ? localDb.socialLinks : []
const fallbackContactMethods = Array.isArray(localDb?.contactMethods) ? localDb.contactMethods : []

const socialLinks = ref(fallbackSocialLinks)
const contactMethods = ref(fallbackContactMethods)
const isLoading = ref(false)
const hasLoaded = ref(false)
const error = ref(null)

let loadPromise = null

async function loadContactData(force = false) {
  if (!force && hasLoaded.value) {
    return {
      socialLinks: socialLinks.value,
      contactMethods: contactMethods.value
    }
  }

  if (!force && loadPromise) return loadPromise

  isLoading.value = true
  error.value = null

  loadPromise = Promise.all([apiGet('/socialLinks'), apiGet('/contactMethods')])
    .then(([social, methods]) => {
      socialLinks.value = Array.isArray(social) ? social : []
      contactMethods.value = Array.isArray(methods) ? methods : []
      hasLoaded.value = true
      return {
        socialLinks: socialLinks.value,
        contactMethods: contactMethods.value
      }
    })
    .catch((err) => {
      error.value = err
      throw err
    })
    .finally(() => {
      isLoading.value = false
      loadPromise = null
    })

  return loadPromise
}

function ensureLoadedClientSide() {
  if (typeof window !== 'undefined' && !hasLoaded.value && !loadPromise) {
    void loadContactData()
  }
}

export function useContactData() {
  ensureLoadedClientSide()

  return {
    socialLinks,
    contactMethods,
    isLoading,
    hasLoaded,
    error,
    loadContactData
  }
}
