import { ref } from 'vue'
import { localDb } from '../data/localDb'

const fallbackExperiences = Array.isArray(localDb?.experiences) ? localDb.experiences : []
const experienceList = ref(fallbackExperiences)
const isLoading = ref(false)
const hasLoaded = ref(true)
const error = ref(null)

async function loadExperiences() {
  return experienceList.value
}

export function useExperienceData() {

  return {
    experiences: experienceList,
    isLoading,
    hasLoaded,
    error,
    loadExperiences
  }
}
