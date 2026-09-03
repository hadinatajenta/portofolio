import { ref } from 'vue'
import { localDb } from '../data/localDb'

const fallbackSocialLinks = Array.isArray(localDb?.socialLinks) ? localDb.socialLinks : []
const fallbackContactMethods = Array.isArray(localDb?.contactMethods) ? localDb.contactMethods : []

const whatsappPrefillMessage = encodeURIComponent(
  `Hi Eren! Saya [Nama] dari [Perusahaan]. Saya menemukan profil Anda dan tertarik dengan pengalaman Anda sebagai Software Engineer. Kami sedang membuka posisi [Nama Posisi] dan saya ingin berdiskusi lebih lanjut mengenai peluang ini. Apakah Anda sedang terbuka untuk kesempatan baru?`
)

const formatContactMethods = (methods) => {
  return methods.map((method) => {
    if (method.id === 'whatsapp' && method.link) {
      const baseUrl = method.link.split('?')[0]
      return {
        ...method,
        link: `${baseUrl}?text=${whatsappPrefillMessage}`
      }
    }
    return method
  })
}

const socialLinks = ref(fallbackSocialLinks)
const contactMethods = ref(formatContactMethods(fallbackContactMethods))

export function useContactData() {
  return {
    socialLinks,
    contactMethods
  }
}
