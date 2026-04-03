import { computed, ref } from 'vue'

// Static content
const name = ref('Hadinata Jenta')
const role = ref('Full Stack Developer · Backend Specialist')
const location = ref('DKI Jakarta, Indonesia')
const intro = ref('Experienced in building microservices with Go and Laravel, optimizing database performance, and integrating services across high-traffic financial environments.')

// CTA Section
const ctaBadge = ref('Open for engagements')
const ctaTitle = ref('Let\'s build something reliable together')
const ctaDescription = ref('Available for backend, full-stack, or system integration work. Let\'s talk about what you need.')
const ctaButtonLabel = ref("Let's collaborate")

// Highlights
const highlights = ref([
  { value: '6+', label: 'Years active' },
  { value: '18+', label: 'Projects delivered' },
  { value: 'GMT+7', label: 'Time zone' }
])

// Navigation
const menus = ref([
  { index: 1, route: '/', name: 'Home' },
  { index: 2, route: '/about', name: 'About' },
  { index: 3, route: '/experience', name: 'Experience' },
  { index: 4, route: '/contact', name: 'Contact' }
])

// Contact info from environment
const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL,
  phone: import.meta.env.VITE_CONTACT_PHONE,
  linkedin: import.meta.env.VITE_CONTACT_LINKEDIN
}

// Social links with SVG
const socials = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/hadinatajenta',
    svg: '<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.914 1.209.1-.943.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.268.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hadinatajenta',
    svg: '<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/hadinatajenta',
    svg: '<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>'
  }
])

/**
 * Composable for managing footer static and computed data
 * Centralizes all footer content and logic
 */
export function useFooterData() {
  // Computed
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
    // Static refs
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
    // Computed
    initials,
    contactChips,
    currentYear,
    // Static objects
    contact
  }
}
