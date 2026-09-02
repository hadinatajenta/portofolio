import { ref, computed } from 'vue'
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
const hasLoaded = ref(true)
const error = ref(null)

async function loadHeroData() {
  return true
}

export function useHeroData() {

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
