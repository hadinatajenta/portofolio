import { ref, computed } from 'vue'

const heroContent = {
  title: 'Full Stack Developer.',
  subtitle: 'Backend-focused engineer building distributed systems and microservices — currently at Bank Rakyat Indonesia.',
  description: '',
  primaryCta: {
    label: 'View My Work',
    to: '/projects'
  },
  secondaryCta: {
    label: 'My Experience',
    to: '/experience'
  },
  stats: [
    { label: 'Years Active', value: '6+' },
    { label: 'Projects', value: '18+' },
    { label: 'Teams', value: '3+' }
  ],
  profileImage: {
    src: '/img/5357.jpg',
    alt: 'Hadinata Jenta'
  }
}

const galleryImages = [
  '/img/5357.jpg',
  '/img/portrait-2.jpg',
  '/img/portrait-3.jpg'
]

// Global singleton state for gallery
const showGallery = ref(false)
const currentIndex = ref(0)

/**
 * Composable for managing hero section content and gallery logic
 */
export function useHeroData() {
  const currentImage = computed(() => galleryImages[currentIndex.value] || galleryImages[0])

  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + galleryImages.length) % galleryImages.length
  }

  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % galleryImages.length
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
    contactCta
  }
}
