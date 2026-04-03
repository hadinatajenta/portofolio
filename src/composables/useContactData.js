const socialLinks = [
  {
    name: 'Gmail',
    icon: '📧',
    url: 'mailto:hadinatajenta122@gmail.com'
  },
  {
    name: 'WhatsApp',
    icon: '💬',
    url: 'https://wa.me/628982681391'
  },
  {
    name: 'LinkedIn',
    icon: '🔗',
    url: 'https://linkedin.com/in/hadinatajenta'
  }
]

const contactMethods = [
  {
    id: 'email',
    icon: '📧',
    title: 'Email',
    description: 'hadinatajenta122@gmail.com',
    link: 'mailto:hadinatajenta122@gmail.com',
    linkText: 'Send Email',
    target: '',
    rel: ''
  },
  {
    id: 'whatsapp',
    icon: '💬',
    title: 'WhatsApp',
    description: '08982681391',
    link: 'https://wa.me/628982681391',
    linkText: 'Chat on WhatsApp',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    id: 'linkedin',
    icon: '🔗',
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    link: 'https://linkedin.com/in/hadinatajenta',
    linkText: 'View Profile',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
]

/**
 * Composable for managing static contact data
 * Centralized contact information and social links
 */
export function useContactData() {
  return {
    socialLinks,
    contactMethods
  }
}
