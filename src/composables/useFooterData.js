import { computed, ref } from 'vue'
import { apiGet } from '../services/apiClient'
import { localDb } from '../data/localDb'

const fallbackFooter = localDb?.footer || {}

const name = ref(fallbackFooter?.name || '')
const role = ref(fallbackFooter?.role || '')
const location = ref(fallbackFooter?.location || '')
const intro = ref(fallbackFooter?.intro || '')
const ctaBadge = ref(fallbackFooter?.ctaBadge || '')
const ctaTitle = ref(fallbackFooter?.ctaTitle || '')
const ctaDescription = ref(fallbackFooter?.ctaDescription || '')
const ctaButtonLabel = ref(fallbackFooter?.ctaButtonLabel || '')
const highlights = ref(Array.isArray(fallbackFooter?.highlights) ? fallbackFooter.highlights : [])
const menus = ref(Array.isArray(fallbackFooter?.menus) ? fallbackFooter.menus : [])
const socials = ref(Array.isArray(fallbackFooter?.socials) ? fallbackFooter.socials : [])

const isLoading = ref(false)
const hasLoaded = ref(false)
const error = ref(null)

const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL,
  phone: import.meta.env.VITE_CONTACT_PHONE,
  linkedin: import.meta.env.VITE_CONTACT_LINKEDIN
}

let loadPromise = null

async function loadFooterData(force = false) {
  if (!force && hasLoaded.value) return true
  if (!force && loadPromise) return loadPromise

  isLoading.value = true
  error.value = null

  loadPromise = apiGet('/footer')
    .then((result) => {
      name.value = result?.name || ''
      role.value = result?.role || ''
      location.value = result?.location || ''
      intro.value = result?.intro || ''
      ctaBadge.value = result?.ctaBadge || ''
      ctaTitle.value = result?.ctaTitle || ''
      ctaDescription.value = result?.ctaDescription || ''
      ctaButtonLabel.value = result?.ctaButtonLabel || ''
      highlights.value = Array.isArray(result?.highlights) ? result.highlights : []
      menus.value = Array.isArray(result?.menus) ? result.menus : []
      socials.value = Array.isArray(result?.socials) ? result.socials : []

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
    void loadFooterData()
  }
}

export function useFooterData() {
  ensureLoadedClientSide()

  const initials = computed(() =>
    name.value
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
  )

  const contactChips = computed(() => {
    const chips = []

    if (contact.email) {
      chips.push({
        label: 'Email',
        url: `mailto:${contact.email}`
      })
    }

    if (contact.phone) {
      chips.push({
        label: 'WhatsApp',
        url: `https://wa.me/${contact.phone}`
      })
    }

    if (contact.linkedin) {
      chips.push({
        label: 'LinkedIn',
        url: contact.linkedin
      })
    }

    return chips
  })

  const currentYear = computed(() => new Date().getFullYear())

  return {
    name,
    role,
    location,
    intro,
    ctaBadge,
    ctaTitle,
    ctaDescription,
    ctaButtonLabel,
    highlights,
    menus,
    socials,
    initials,
    contactChips,
    currentYear,
    contact,
    isLoading,
    hasLoaded,
    error,
    loadFooterData
  }
}
