import { ref } from 'vue'
import { localDb } from '../data/localDb'

const fallbackSocialLinks = Array.isArray(localDb?.socialLinks) ? localDb.socialLinks : []
const fallbackContactMethods = Array.isArray(localDb?.contactMethods) ? localDb.contactMethods : []

const socialLinks = ref(fallbackSocialLinks)
const contactMethods = ref(fallbackContactMethods)
const isLoading = ref(false)
const hasLoaded = ref(true)
const error = ref(null)

async function loadContactData() {
  return {
    socialLinks: socialLinks.value,
    contactMethods: contactMethods.value
  }
}

export function useContactData() {

  return {
    socialLinks,
    contactMethods,
    isLoading,
    hasLoaded,
    error,
    loadContactData
  }
}
