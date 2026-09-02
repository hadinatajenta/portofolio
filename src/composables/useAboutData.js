import { ref } from 'vue'
import { localDb } from '../data/localDb'

const fallbackAbout = localDb?.about || {}

const name = ref(fallbackAbout?.name || '')
const bio = ref(fallbackAbout?.bio || '')
const skills = ref(Array.isArray(fallbackAbout?.skills) ? fallbackAbout.skills : [])
const profileImage = ref(fallbackAbout?.profileImage || '')
const isLoading = ref(false)
const hasLoaded = ref(true)
const error = ref(null)

async function loadAboutData() {
  return true
}

export function useAboutData() {

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
