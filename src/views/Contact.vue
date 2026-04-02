<template>
  <DefaultLayout>
    <section class="space-y-16">
      <!-- Hero Header with Animation -->
      <header class="relative overflow-hidden rounded-3xl border border-black/10 bg-white px-6 py-20 sm:px-10 lg:px-16 dark:bg-white/5 dark:border-white/10">
        <div class="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-float"></div>
        <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-float-delayed"></div>

        <div class="relative space-y-8">
          <div class="space-y-4 animate-fade-in-up" style="animation-delay: 0s">
            <span class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black dark:border-white/20 dark:bg-white/10 dark:text-white">
              Let's Connect
            </span>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white">
              Get in <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">Touch</span>
            </h1>
            <p class="text-lg text-black/60 max-w-2xl leading-relaxed dark:text-white/70">
              Let's discuss your project, ideas, or just say hello. I'm always interested in connecting with talented people and exploring new opportunities.
            </p>
          </div>

          <!-- Social Links with Animation -->
          <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.1s">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-3 rounded-xl border-2 border-black/10 bg-white px-6 py-3 transition-all duration-300 hover:border-black hover:shadow-lg hover:scale-105 dark:border-white/20 dark:bg-white/5 dark:hover:border-white dark:hover:bg-white/10"
            >
              <span class="text-xl transition-transform duration-300 group-hover:scale-125">{{ social.icon }}</span>
              <span class="font-semibold text-black/80 group-hover:text-black dark:text-white/80 dark:group-hover:text-white">{{ social.name }}</span>
            </a>
          </div>
        </div>
      </header>

      <!-- Contact Methods Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(method, index) in contactMethods"
          :key="method.id"
          class="group relative rounded-2xl border-2 border-black/10 bg-white p-8 transition-all duration-300 hover:border-black hover:shadow-xl hover:scale-105 animate-fade-in-up dark:bg-white/5 dark:border-white/10 dark:hover:border-white dark:hover:bg-white/10"
          :style="{ 'animation-delay': `${(index + 2) * 0.1}s` }"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
          <div class="relative">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black/5 group-hover:bg-black/10 transition-colors duration-300 mb-4 dark:bg-white/5 dark:group-hover:bg-white/10">
              <span class="text-3xl">{{ method.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-black mb-2 dark:text-white">{{ method.title }}</h3>
            <p class="text-black/60 text-sm mb-4 dark:text-white/70">{{ method.description }}</p>
            <a
              :href="method.link"
              :target="method.target"
              :rel="method.rel"
              class="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all duration-300 dark:text-white"
            >
              {{ method.linkText }}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="relative rounded-3xl border border-black/10 bg-white px-6 py-12 sm:px-10 lg:px-16 dark:bg-white/5 dark:border-white/10">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl dark:bg-blue-500/20"></div>
        <div class="relative space-y-8">
          <div class="space-y-3 animate-fade-in-up" style="animation-delay: 0.4s">
            <h2 class="text-3xl sm:text-4xl font-bold text-black dark:text-white">Send me a message</h2>
            <p class="text-black/60 text-lg dark:text-white/70">I'll get back to you within 24 hours</p>
          </div>

          <form class="grid gap-6 max-w-2xl" @submit.prevent="handleSubmit">
            <!-- Name and Email Row -->
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="animate-fade-in-up" style="animation-delay: 0.45s">
                <label class="block text-sm font-semibold text-black mb-2 dark:text-white">Full Name *</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  class="w-full px-4 py-3 rounded-lg border-2 border-black/10 bg-white focus:border-black focus:outline-none transition-colors duration-300 dark:border-white/20 dark:bg-white/5 dark:text-white dark:focus:border-white dark:placeholder-white/50"
                />
              </div>
              <div class="animate-fade-in-up" style="animation-delay: 0.5s">
                <label class="block text-sm font-semibold text-black mb-2 dark:text-white">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  class="w-full px-4 py-3 rounded-lg border-2 border-black/10 bg-white focus:border-black focus:outline-none transition-colors duration-300 dark:border-white/20 dark:bg-white/5 dark:text-white dark:focus:border-white dark:placeholder-white/50"
                />
              </div>
            </div>

            <!-- Subject -->
            <div class="animate-fade-in-up" style="animation-delay: 0.55s">
              <label class="block text-sm font-semibold text-black mb-2 dark:text-white">Subject *</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Project Inquiry / Collaboration / Just saying hi"
                required
                class="w-full px-4 py-3 rounded-lg border-2 border-black/10 bg-white focus:border-black focus:outline-none transition-colors duration-300 dark:border-white/20 dark:bg-white/5 dark:text-white dark:focus:border-white dark:placeholder-white/50"
              />
            </div>

            <!-- Message -->
            <div class="animate-fade-in-up" style="animation-delay: 0.6s">
              <label class="block text-sm font-semibold text-black mb-2 dark:text-white">Message *</label>
              <textarea
                v-model="form.message"
                placeholder="Tell me about your project, ideas, or just say hello..."
                rows="5"
                required
                class="w-full px-4 py-3 rounded-lg border-2 border-black/10 bg-white focus:border-black focus:outline-none transition-colors duration-300 resize-none dark:border-white/20 dark:bg-white/5 dark:text-white dark:focus:border-white dark:placeholder-white/50"
              ></textarea>
            </div>

            <!-- Submit Button with Animation -->
            <div class="animate-fade-in-up" style="animation-delay: 0.65s">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-black text-white font-bold rounded-lg transition-all duration-300 hover:bg-black/90 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
                <svg v-if="!isSubmitting" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4l16 8-16 8 4-8-4-8z" />
                </svg>
              </button>
            </div>

            <!-- Success Message -->
            <div
              v-if="submitted"
              class="p-4 rounded-lg bg-green-50 border-2 border-green-200 text-green-800 animate-bounce-in dark:bg-green-950/30 dark:border-green-900 dark:text-green-200"
            >
              <p class="font-semibold">✓ Message sent successfully!</p>
              <p class="text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          </form>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="relative rounded-3xl border border-black/10 bg-gradient-to-br from-black to-black/80 px-6 py-16 sm:px-10 lg:px-16 text-center overflow-hidden dark:from-white dark:to-white/80 dark:text-black">
        <div class="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl dark:bg-black/5"></div>
        <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl dark:bg-black/5"></div>
        
        <div class="relative space-y-6 animate-fade-in-up" style="animation-delay: 0.7s">
          <h2 class="text-3xl sm:text-4xl font-bold text-white dark:text-black">Prefer a quick chat?</h2>
          <p class="text-white/80 text-lg max-w-xl mx-auto dark:text-black/80">
            Connect with me on WhatsApp or LinkedIn for a more immediate conversation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black dark:bg-black dark:text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>💬 WhatsApp</span>
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white dark:border-black dark:text-black font-bold rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 dark:hover:bg-black/10"
            >
              <span>🔗 LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useContactData } from '../composables/useContactData'
import { useContactForm } from '../composables/useContactForm'

// Composables
const { socialLinks, contactMethods } = useContactData()
const { form, isSubmitting, submitted, handleSubmit } = useContactForm()
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-40px) translateX(0px);
  }
  75% {
    transform: translateY(-20px) translateX(-10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(20px) translateX(-10px);
  }
  50% {
    transform: translateY(40px) translateX(0px);
  }
  75% {
    transform: translateY(20px) translateX(10px);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 20s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-bounce-in {
  animation: bounce-in 0.4s ease-out;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>
