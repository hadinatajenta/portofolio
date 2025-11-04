<template>
  <DefaultLayout>
    <section class="space-y-16">
      <header class="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-14 sm:px-10 lg:px-16">
        <div class="absolute -top-20 -left-24 h-60 w-60 rounded-full bg-purple-500/30 blur-[120px]"></div>
        <div class="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-[160px]"></div>

        <div class="relative grid gap-12 lg:grid-cols-[1fr,0.9fr] items-start">
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
              Contact
            </span>
            <h1 class="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Let’s plan the next milestone for your product or team.
            </h1>
            <p class="text-lg text-gray-300 max-w-xl">
              Send a note about what you’re building, where you need support, and the impact you want to unlock. I’ll respond within two business days.
            </p>
            <div class="flex flex-col gap-4 rounded-2xl border border-white/12 bg-white/[0.05] p-6 text-sm text-gray-200">
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-100">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-gray-400">Email</p>
                  <a class="text-white hover:text-cyan-200 transition" href="mailto:hadinatajenta122@gmail.com">
                    hadinatajenta122@gmail.com
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-100">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h.28a2 2 0 011.897 1.368l.518 1.553a2 2 0 01-.45 2.013l-1.291 1.29a16 16 0 007.071 7.071l1.29-1.291a2 2 0 012.013-.45l1.553.518A2 2 0 0121 18.72V19a2 2 0 01-2 2h-.5C10.825 21 3 13.175 3 3.5V3z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-gray-400">WhatsApp</p>
                  <a class="text-white hover:text-cyan-200 transition" href="https://wa.me/628982681391" target="_blank" rel="noopener">
                    +62 898 268 1391
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-100">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-gray-400">LinkedIn</p>
                  <a class="text-white hover:text-cyan-200 transition" href="https://linkedin.com/in/hadinata-jenta" target="_blank" rel="noopener">
                    Hadinata Jenta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form class="space-y-6 rounded-[28px] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl shadow-[0_32px_120px_rgba(55,34,102,0.35)]" @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-200">
                Project Inquiry
              </span>
              <p class="text-sm text-gray-300">
                Share a few details and I’ll follow up with next steps.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="field">
                <span class="field-label">Name</span>
                <input v-model="form.name" type="text" name="name" autocomplete="name" required class="field-input" placeholder="Jane Doe" />
              </label>
              <label class="field">
                <span class="field-label">Email</span>
                <input v-model="form.email" type="email" name="email" autocomplete="email" required class="field-input" placeholder="you@company.com" />
              </label>
              <label class="field">
                <span class="field-label">Company / Team</span>
                <input v-model="form.company" type="text" name="company" class="field-input" placeholder="Acme Labs" />
              </label>
              <label class="field">
                <span class="field-label">Project timeline</span>
                <select v-model="form.timeline" name="timeline" class="field-input">
                  <option value="">Choose one</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-2 months">1–2 months</option>
                  <option value="quarter">This quarter</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </label>
            </div>

            <label class="field">
              <span class="field-label">What should we tackle together?</span>
              <textarea
                v-model="form.project"
                name="project"
                rows="4"
                class="field-input"
                placeholder="Tell me about the problem, team, and what success looks like."
                required
              ></textarea>
            </label>

            <label class="field">
              <span class="field-label">Anything else?</span>
              <textarea
                v-model="form.context"
                name="context"
                rows="3"
                class="field-input"
                placeholder="Share links, constraints, or questions."
              ></textarea>
            </label>

            <div class="flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span class="inline-flex items-center gap-2">
                <input v-model="form.subscribe" type="checkbox" id="subscribe" class="h-4 w-4 rounded border-white/20 bg-transparent text-purple-400 focus:ring-0" />
                <label for="subscribe">Keep me posted on new case studies</label>
              </span>
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-purple-500/50 to-cyan-400/40 px-5 py-3 text-sm font-semibold text-white transition hover:from-purple-400/60 hover:to-cyan-300/50"
            >
              Send inquiry
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4l16 8-16 8 4-8-4-8z" />
              </svg>
            </button>

            <p v-if="submitted" class="text-xs text-cyan-200">
              Thanks! I’ll be in touch shortly. For urgent matters reach me via email or WhatsApp.
            </p>
          </form>
        </div>
      </header>

      <section class="grid gap-8 lg:grid-cols-3">
        <article class="insight-card">
          <h2>What to expect</h2>
          <p>We’ll schedule a 30-minute discovery call. You’ll walk away with next steps—even if we don’t end up partnering.</p>
        </article>
        <article class="insight-card">
          <h2>Typical response time</h2>
          <p>Within 36 hours, Monday through Friday. I’ll confirm availability and any pre-read material upfront.</p>
        </article>
        <article class="insight-card">
          <h2>Time zones</h2>
          <p>Based in Jakarta (UTC+7) and comfortable collaborating async across APAC, EMEA, and US overlap hours.</p>
        </article>
      </section>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { reactive, ref } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const form = reactive({
  name: '',
  email: '',
  company: '',
  timeline: '',
  project: '',
  context: '',
  subscribe: false
});

const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.6);
}

.field-input {
  width: 100%;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(12, 11, 19, 0.55);
  padding: 0.75rem 1rem;
  color: #f8fafc;
  font-size: 0.95rem;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.field-input:focus {
  outline: none;
  border-color: rgba(165, 243, 252, 0.55);
  box-shadow: 0 0 0 3px rgba(165, 243, 252, 0.2);
}

.field-input::placeholder {
  color: rgba(148, 163, 184, 0.7);
}

.insight-card {
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  padding: 1.75rem;
  backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.insight-card h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8fafc;
}

.insight-card p {
  font-size: 0.95rem;
  color: rgba(226, 232, 240, 0.8);
}
</style>
