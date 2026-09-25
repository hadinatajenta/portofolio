<template>
  <DefaultLayout>
    <div class="max-w-6xl mx-auto py-6 sm:py-10 lg:py-14">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        <!-- Left Column: Context, Availability & Direct Channels -->
        <div class="lg:col-span-5 space-y-8 text-left">
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-none">
              Contact<span class="text-[var(--color-text-muted)] font-dot">.</span>
            </h1>
            <p class="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Let's connect — I'm currently available for backend engineering roles, distributed systems consulting, and collaborations.
            </p>
          </div>

          <!-- Availability & Location Details -->
          <div class="space-y-3 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text)] font-medium">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>

            <div class="text-xs text-[var(--color-text-tertiary)] space-y-0.5">
              <p class="font-medium text-[var(--color-text-secondary)]">DKI Jakarta, Indonesia • GMT+7</p>
              <p>Available for remote worldwide &amp; local consulting</p>
            </div>
          </div>

          <!-- Direct Contact Channels -->
          <div class="space-y-3 pt-2">
            <p class="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] font-dot">
              Direct Channels
            </p>
            <div class="flex flex-col gap-2.5">
              <a
                v-for="method in contactMethods"
                :key="method.id"
                :href="method.link"
                :target="method.target || (method.id !== 'email' ? '_blank' : undefined)"
                :rel="method.rel || (method.id !== 'email' ? 'noopener noreferrer' : undefined)"
                :aria-label="getAriaLabel(method)"
                class="group flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] transition-all duration-200"
              >
                <div class="flex items-center gap-3 min-w-0">
                  <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-surface-subtle)] text-[var(--color-text)] flex-shrink-0">
                    <EnvelopeIcon v-if="method.id === 'email'" class="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                    <svg v-else-if="method.id === 'linkedin'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <svg v-else-if="method.id === 'github'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <svg v-else-if="method.id === 'whatsapp'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.214 8.214 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.75c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28"/>
                    </svg>
                    <span v-else class="text-xs">{{ method.icon }}</span>
                  </span>
                  <div class="truncate">
                    <p class="text-sm font-semibold text-[var(--color-text)] truncate">{{ method.title }}</p>
                    <p class="text-xs text-[var(--color-text-secondary)] font-mono truncate">{{ method.description }}</p>
                  </div>
                </div>
                <svg class="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text)] group-hover:translate-x-1 transition-all flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form (Gmail Compose Flow) -->
        <div class="lg:col-span-7">
          <div class="p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)] space-y-6">
            <div class="text-left space-y-2">
              <h2 class="text-xl sm:text-2xl font-bold text-[var(--color-text)] tracking-tight">
                Send a Message
              </h2>
              <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Fill in the details below and we'll prepare a Gmail draft for you. Review it and send when you're ready.
              </p>
            </div>

            <!-- Feedback Notification: Draft Ready -->
            <div
              v-if="formStatus === 'draft-ready'"
              role="status"
              aria-live="polite"
              class="p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 space-y-2.5 text-left text-sm"
            >
              <div class="flex items-center gap-2 font-semibold text-emerald-900 dark:text-emerald-200">
                <svg class="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Draft opened in Gmail. Review it and click Send.</span>
              </div>
              <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your draft has been prepared with your message addressed to <span class="font-mono font-semibold text-[var(--color-text)]">contact@hadinata.me</span>.
              </p>
              <div class="flex flex-wrap items-center gap-3 pt-1.5">
                <a
                  :href="currentDraft.gmailUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Re-open Gmail draft ↗
                </a>
                <span class="text-xs text-[var(--color-text-tertiary)]" aria-hidden="true">•</span>
                <a
                  :href="currentDraft.mailtoUrl"
                  class="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] underline underline-offset-2 transition-colors"
                >
                  Use your email app
                </a>
                <span class="text-xs text-[var(--color-text-tertiary)]" aria-hidden="true">•</span>
                <button
                  type="button"
                  @click="handleReset"
                  class="text-xs font-semibold text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] underline underline-offset-2 transition-colors"
                >
                  Start over
                </button>
              </div>
            </div>

            <!-- Feedback Notification: Popup Blocked -->
            <div
              v-else-if="formStatus === 'popup-blocked'"
              role="alert"
              class="p-4 sm:p-5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 space-y-2.5 text-left text-sm"
            >
              <div class="flex items-center gap-2 font-semibold">
                <svg class="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Your browser blocked the Gmail window. Open the draft manually:</span>
              </div>
              <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Click below to open your pre-filled message addressed to <span class="font-mono font-semibold text-[var(--color-text)]">contact@hadinata.me</span>.
              </p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <a
                  :href="currentDraft.gmailUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
                >
                  Open Gmail Draft ↗
                </a>
                <a
                  :href="currentDraft.mailtoUrl"
                  class="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] underline underline-offset-2 transition-colors"
                >
                  Use your email app
                </a>
                <button
                  type="button"
                  @click="handleReset"
                  class="text-xs font-semibold text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] underline underline-offset-2 transition-colors"
                >
                  Start over
                </button>
              </div>
            </div>

            <!-- Form Element -->
            <form @submit.prevent="handleOpenGmail" novalidate class="space-y-5 text-left">
              <!-- Name -->
              <div class="space-y-1.5">
                <label for="contact-name" class="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">
                  Name <span class="text-rose-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  ref="nameInputRef"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  required
                  maxlength="100"
                  placeholder="e.g. Alex Pratama"
                  :aria-invalid="!!errors.name"
                  :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                  class="w-full px-4 py-3 rounded-xl border bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors placeholder:text-[var(--color-text-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)]"
                  :class="errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-[var(--color-border)] focus:border-[var(--color-border-hover)]'"
                  @input="errors.name && validateField('name')"
                />
                <p v-if="errors.name" id="contact-name-error" class="text-xs text-rose-500 font-medium mt-1">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div class="space-y-1.5">
                <label for="contact-email" class="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">
                  Email <span class="text-rose-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  ref="emailInputRef"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  required
                  maxlength="100"
                  placeholder="e.g. alex@example.com"
                  :aria-invalid="!!errors.email"
                  :aria-describedby="errors.email ? 'contact-email-error' : undefined"
                  class="w-full px-4 py-3 rounded-xl border bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors placeholder:text-[var(--color-text-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)]"
                  :class="errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-[var(--color-border)] focus:border-[var(--color-border-hover)]'"
                  @input="errors.email && validateField('email')"
                />
                <p v-if="errors.email" id="contact-email-error" class="text-xs text-rose-500 font-medium mt-1">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Message -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <label for="contact-message" class="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">
                    Message <span class="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <span class="text-[11px] text-[var(--color-text-tertiary)] font-mono">
                    {{ form.message.length }}/2000
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  ref="messageInputRef"
                  v-model="form.message"
                  rows="5"
                  required
                  maxlength="2000"
                  placeholder="Hi Hadinata, I'd like to discuss a project regarding..."
                  :aria-invalid="!!errors.message"
                  :aria-describedby="errors.message ? 'contact-message-error' : undefined"
                  class="w-full px-4 py-3 rounded-xl border bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors placeholder:text-[var(--color-text-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)] resize-y min-h-[120px]"
                  :class="errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-[var(--color-border)] focus:border-[var(--color-border-hover)]'"
                  @input="errors.message && validateField('message')"
                ></textarea>
                <p v-if="errors.message" id="contact-message-error" class="text-xs text-rose-500 font-medium mt-1">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Action Buttons -->
              <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <!-- Primary CTA: Open Gmail & Send -->
                <button
                  type="submit"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[var(--color-btn-text)] bg-[var(--color-btn-bg)] border border-[var(--color-btn-bg)] transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)] min-h-[44px]"
                >
                  <span>Open Gmail &amp; Send</span>
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <!-- Secondary Action: Use your email app -->
                <button
                  type="button"
                  @click="handleOpenMailto"
                  class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] border border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-strong)] min-h-[44px]"
                >
                  <span>Use your email app</span>
                </button>
              </div>

              <p class="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed pt-1">
                Prepares a draft addressed to <span class="font-mono text-[var(--color-text-secondary)]">contact@hadinata.me</span>. The browser prepares the draft; you review and send it manually.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { reactive, ref, nextTick } from 'vue'
import { useHead } from '@unhead/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useContactData } from '../composables/useContactData'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { validateContactForm, buildEmailDraft } from '../utils/emailDraft'

const { contactMethods } = useContactData()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const formStatus = ref('idle') // 'idle' | 'draft-ready' | 'popup-blocked'
const currentDraft = ref({
  subject: '',
  body: '',
  gmailUrl: '',
  mailtoUrl: ''
})

const nameInputRef = ref(null)
const emailInputRef = ref(null)
const messageInputRef = ref(null)

const validateField = (field) => {
  const result = validateContactForm(form)
  errors[field] = result.errors[field] || ''
}

const focusFirstError = () => {
  nextTick(() => {
    if (errors.name && nameInputRef.value) {
      nameInputRef.value.focus()
    } else if (errors.email && emailInputRef.value) {
      emailInputRef.value.focus()
    } else if (errors.message && messageInputRef.value) {
      messageInputRef.value.focus()
    }
  })
}

const handleOpenGmail = () => {
  const result = validateContactForm(form)
  errors.name = result.errors.name
  errors.email = result.errors.email
  errors.message = result.errors.message

  if (!result.isValid) {
    focusFirstError()
    return
  }

  const draft = buildEmailDraft(form)
  currentDraft.value = draft

  if (typeof window !== 'undefined') {
    const newWindow = window.open(draft.gmailUrl, '_blank', 'noopener,noreferrer')
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      formStatus.value = 'popup-blocked'
    } else {
      formStatus.value = 'draft-ready'
    }
  }
}

const handleOpenMailto = () => {
  const result = validateContactForm(form)
  errors.name = result.errors.name
  errors.email = result.errors.email
  errors.message = result.errors.message

  if (!result.isValid) {
    focusFirstError()
    return
  }

  const draft = buildEmailDraft(form)
  currentDraft.value = draft

  if (typeof window !== 'undefined') {
    window.location.href = draft.mailtoUrl
    formStatus.value = 'draft-ready'
  }
}

const handleReset = () => {
  form.name = ''
  form.email = ''
  form.message = ''
  errors.name = ''
  errors.email = ''
  errors.message = ''
  formStatus.value = 'idle'
  currentDraft.value = {
    subject: '',
    body: '',
    gmailUrl: '',
    mailtoUrl: ''
  }
}

const getAriaLabel = (method) => {
  switch (method.id) {
    case 'email':
      return 'Send email to contact@hadinata.me'
    case 'linkedin':
      return 'View LinkedIn profile of Hadinata Jenta'
    case 'github':
      return 'View GitHub repository of Hadinata Jenta'
    case 'whatsapp':
      return 'Chat on WhatsApp with Hadinata Jenta'
    default:
      return method.title
  }
}

useHead({
  title: 'Contact — Hadinata Jenta',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Hadinata Jenta for backend development, distributed systems consulting, or collaborations. Send a direct message or connect via GitHub, LinkedIn, WhatsApp, or Email.'
    },
    { property: 'og:title', content: 'Contact — Hadinata Jenta' },
    { property: 'og:description', content: 'Get in touch with Hadinata Jenta for backend development, distributed systems consulting, or collaborations. Send a direct message or connect via GitHub, LinkedIn, WhatsApp, or Email.' },
    { property: 'og:url', content: 'https://hadinata.me/contact' },
    { name: 'twitter:title', content: 'Contact — Hadinata Jenta' },
    { name: 'twitter:description', content: 'Reach out to Hadinata Jenta via direct contact form, GitHub, LinkedIn, WhatsApp, or Email.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hadinata.me/contact' }
  ]
})
</script>
