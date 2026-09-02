import { ref } from 'vue'
import { localDb } from '../data/localDb'

const fallbackSocialLinks = Array.isArray(localDb?.socialLinks) ? localDb.socialLinks : []
const fallbackContactMethods = Array.isArray(localDb?.contactMethods) ? localDb.contactMethods : []

const socialLinks = ref(fallbackSocialLinks)
const contactMethods = ref(fallbackContactMethods)

export function useContactData() {
  return {
    socialLinks,
    contactMethods
  }
}
