import { ref, computed } from 'vue'

const heroContent = {
  title: 'Hi, I\'m Hadinata Jenta',
  subtitle: 'Full stack engineer specializing in distributed microservices and high-concurrency systems.',
  description: 'Full Stack Engineer with 3+ years of professional experience building high-traffic distributed systems. From architecting mission-critical merchant operations within major financial ecosystems to scaling regional news platforms and optimizing specialized inventory workflows, I blend technical rigor with a product-driven mindset to deliver reliable, high-performance software.',
  primaryCta: {
    label: 'View My Work',
    to: '/projects'
  },
  secondaryCta: {
    label: 'My Experience',
    to: '/experience'
  },
  stats: [
    { label: 'Professional Exp.', value: '3+ Yrs' },
    { label: 'Systems Built', value: '10+' },
    { label: 'Articles Live', value: '500+' }
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
