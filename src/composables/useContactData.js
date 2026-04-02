/**
 * Composable for managing static contact data
 * Centralized contact information and social links
 */
export function useContactData() {
  const socialLinks = [
    {
      name: 'Gmail',
      icon: '📧',
      url: 'mailto:YOUR_EMAIL@gmail.com'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/YOUR_WHATSAPP_NUMBER'
    },
    {
      name: 'LinkedIn',
      icon: '🔗',
      url: 'https://linkedin.com/in/YOUR_LINKEDIN'
    }
  ]

  const contactMethods = [
    {
      id: 'email',
      icon: '📧',
      title: 'Email',
      description: 'Send me an email and I\'ll respond within 24 hours.',
      link: 'mailto:YOUR_EMAIL@gmail.com',
      linkText: 'Send Email',
      target: '',
      rel: ''
    },
    {
      id: 'whatsapp',
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick chat on WhatsApp for urgent matters.',
      link: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
      linkText: 'Chat on WhatsApp',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      id: 'linkedin',
      icon: '🔗',
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn for professional inquiries.',
      link: 'https://linkedin.com/in/YOUR_LINKEDIN',
      linkText: 'View Profile',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ]

  return {
    socialLinks,
    contactMethods
  }
}
