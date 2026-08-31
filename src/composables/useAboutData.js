import { ref } from 'vue'
import { apiGet } from '../services/apiClient'
import { localDb } from '../data/localDb'

const fallbackAbout = localDb?.about || {}

const name = ref(fallbackAbout?.name || '')
const bio = ref(fallbackAbout?.bio || '')
const skills = ref(Array.isArray(fallbackAbout?.skills) ? fallbackAbout.skills : [])
const profileImage = ref(fallbackAbout?.profileImage || '')
const isLoading = ref(false)
const hasLoaded = ref(false)
const error = ref(null)

let loadPromise = null

async function loadAboutData(force = false) {
  if (!force && hasLoaded.value) return true
  if (!force && loadPromise) return loadPromise

  isLoading.value = true
  error.value = null

  loadPromise = apiGet('/about')
    .then((result) => {
      name.value = result?.name || ''
      bio.value = result?.bio || ''
      skills.value = Array.isArray(result?.skills) ? result.skills : []
      profileImage.value = result?.profileImage || ''
      hasLoaded.value = true
      return true
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
    void loadAboutData()
  }
}

export function useAboutData() {
  ensureLoadedClientSide()

  return {
    name,
    bio,
    skills,
    profileImage,
    isLoading,
    hasLoaded,
    error,
    loadAboutData
  }
}
