import { ref, computed } from 'vue'
import { apiGet } from '../services/apiClient'
import { localDb } from '../data/localDb'

const fallbackHero = localDb?.hero || {}
const fallbackHeroContent = fallbackHero?.content || {}
const fallbackGalleryImages = Array.isArray(fallbackHero?.galleryImages) ? fallbackHero.galleryImages : []

const heroContent = ref({
  title: fallbackHeroContent?.title || '',
  subtitle: fallbackHeroContent?.subtitle || '',
  description: fallbackHeroContent?.description || '',
  primaryCta: fallbackHeroContent?.primaryCta || { label: '', to: '/' },
  secondaryCta: fallbackHeroContent?.secondaryCta || { label: '', to: '/' },
  stats: Array.isArray(fallbackHeroContent?.stats) ? fallbackHeroContent.stats : [],
  profileImage: fallbackHeroContent?.profileImage || { src: '', alt: '' }
})

const galleryImages = ref(fallbackGalleryImages)
const showGallery = ref(false)
const currentIndex = ref(0)
const isLoading = ref(false)
const hasLoaded = ref(false)
const error = ref(null)

let loadPromise = null

async function loadHeroData(force = false) {
  if (!force && hasLoaded.value) return true
  if (!force && loadPromise) return loadPromise

  isLoading.value = true
  error.value = null

  loadPromise = apiGet('/hero')
    .then((result) => {
      heroContent.value = {
        title: result?.content?.title || '',
        subtitle: result?.content?.subtitle || '',
        description: result?.content?.description || '',
        primaryCta: result?.content?.primaryCta || { label: '', to: '/' },
        secondaryCta: result?.content?.secondaryCta || { label: '', to: '/' },
        stats: Array.isArray(result?.content?.stats) ? result.content.stats : [],
        profileImage: result?.content?.profileImage || { src: '', alt: '' }
      }

      galleryImages.value = Array.isArray(result?.galleryImages)
        ? result.galleryImages
        : []

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
    void loadHeroData()
  }
}

export function useHeroData() {
  ensureLoadedClientSide()

  const currentImage = computed(() => {
    if (!galleryImages.value.length) return heroContent.value.profileImage?.src || ''
    return galleryImages.value[currentIndex.value] || galleryImages.value[0]
  })

  const prevImage = () => {
    if (!galleryImages.value.length) return
    currentIndex.value = (currentIndex.value - 1 + galleryImages.value.length) % galleryImages.value.length
  }

  const nextImage = () => {
    if (!galleryImages.value.length) return
    currentIndex.value = (currentIndex.value + 1) % galleryImages.value.length
  }

  const setImage = (index) => {
    currentIndex.value = index
  }

  const contactCta = import.meta.env.VITE_CONTACT_EMAIL ? `mailto:${import.meta.env.VITE_CONTACT_EMAIL}` : '/contact'

  return {
    heroContent,
    galleryImages,
    showGallery,
    currentIndex,
    currentImage,
    prevImage,
    nextImage,
    setImage,
    contactCta,
    isLoading,
    hasLoaded,
    error,
    loadHeroData
  }
}
