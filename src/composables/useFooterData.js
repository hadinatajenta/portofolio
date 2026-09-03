import { computed, ref } from 'vue'
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
const hasLoaded = ref(true)
const error = ref(null)

const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL,
  phone: import.meta.env.VITE_CONTACT_PHONE,
  linkedin: import.meta.env.VITE_CONTACT_LINKEDIN
}

async function loadFooterData() {
  return true
}

export function useFooterData() {

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
      const message = encodeURIComponent(`Hi Eren! Saya [Nama] dari [Perusahaan]. Saya menemukan profil Anda dan tertarik dengan pengalaman Anda sebagai Software Engineer. Kami sedang membuka posisi [Nama Posisi] dan saya ingin berdiskusi lebih lanjut mengenai peluang ini. Apakah Anda sedang terbuka untuk kesempatan baru?`)
      chips.push({
        label: 'WhatsApp',
        url: `https://wa.me/${contact.phone}?text=${message}`
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
