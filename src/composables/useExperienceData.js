import { ref } from 'vue'
import { apiGet } from '../services/apiClient'
import { localDb } from '../data/localDb'

const fallbackExperiences = Array.isArray(localDb?.experiences) ? localDb.experiences : []
const experienceList = ref(fallbackExperiences)
const isLoading = ref(false)
const hasLoaded = ref(false)
const error = ref(null)

let loadPromise = null

async function loadExperiences(force = false) {
  if (!force && hasLoaded.value) return experienceList.value
  if (!force && loadPromise) return loadPromise

  isLoading.value = true
  error.value = null

  loadPromise = apiGet('/experiences')
    .then((result) => {
      experienceList.value = Array.isArray(result) ? result : []
      hasLoaded.value = true
      return experienceList.value
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
    void loadExperiences()
  }
}

export function useExperienceData() {
  ensureLoadedClientSide()

  return {
    experiences: experienceList,
    isLoading,
    hasLoaded,
    error,
    loadExperiences
  }
}
