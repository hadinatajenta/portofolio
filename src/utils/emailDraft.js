/**
 * Utility to construct properly encoded Gmail compose and mailto URLs.
 * Pure client-side helper with zero external dependencies.
 */

export const RECIPIENT_EMAIL = 'contact@hadinata.me'
export const GMAIL_COMPOSE_BASE = 'https://mail.google.com/mail/?view=cm&fs=1'

/**
 * Validates form input fields client-side.
 * @param {Object} input
 * @param {string} input.name
 * @param {string} input.email
 * @param {string} input.message
 * @returns {{ isValid: boolean, errors: { name: string, email: string, message: string } }}
 */
export function validateContactForm({ name = '', email = '', message = '' }) {
  const errors = {
    name: '',
    email: '',
    message: ''
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  // Name validation
  if (!trimmedName) {
    errors.name = 'Please enter your name.'
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  } else if (trimmedName.length > 100) {
    errors.name = 'Name must be 100 characters or less.'
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.'
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@domain.com).'
  } else if (trimmedEmail.length > 100) {
    errors.email = 'Email must be 100 characters or less.'
  }

  // Message validation
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.'
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  } else if (trimmedMessage.length > 2000) {
    errors.message = 'Message must be 2000 characters or less.'
  }

  const isValid = !errors.name && !errors.email && !errors.message

  return {
    isValid,
    errors
  }
}

/**
 * Builds the subject and body, and returns safe URLs for Gmail and mailto.
 * @param {Object} input
 * @param {string} input.name
 * @param {string} input.email
 * @param {string} input.message
 * @returns {{ subject: string, body: string, gmailUrl: string, mailtoUrl: string }}
 */
export function buildEmailDraft({ name = '', email = '', message = '' }) {
  const cleanName = name.trim()
  const cleanEmail = email.trim()
  const cleanMessage = message.trim()

  const subject = `Website Contact — ${cleanName}`
  const body = `Hi Hadinata,

My name is ${cleanName}.
Email: ${cleanEmail}

Message:
${cleanMessage}

---
Sent from hadinata.me`

  // 1. Gmail Web Compose URL (URLSearchParams handles safe encoding of Unicode, quotes, newlines)
  const gmailParams = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: RECIPIENT_EMAIL,
    su: subject,
    body: body
  })
  const gmailUrl = `${GMAIL_COMPOSE_BASE}&${gmailParams.toString()}`

  // 2. Mailto URL (RFC 6068: spaces encoded as %20 for maximum mail client compatibility)
  const mailtoParams = new URLSearchParams({
    subject: subject,
    body: body
  })
  const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?${mailtoParams.toString().replace(/\+/g, '%20')}`

  return {
    subject,
    body,
    gmailUrl,
    mailtoUrl
  }
}
