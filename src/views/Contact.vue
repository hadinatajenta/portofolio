<template>
  <DefaultLayout>
    <main class="min-h-screen flex items-center justify-center px-4 py-12">
      <section class="w-full max-w-6xl grid gap-8 md:grid-cols-2 items-start">
        <!-- Left: Info / Hero -->
        <div class="relative">
          <div aria-hidden="true"
            class="absolute -left-16 -top-10 w-64 h-64 rounded-full opacity-30 blur-3xl bg-gradient-to-br from-indigo-600 to-pink-500">
          </div>

          <div
            class="backdrop-blur-md bg-gradient-to-br from-white/6 to-white/3 border border-white/6 rounded-2xl p-8 shadow-xl">
            <h1 class="text-3xl md:text-4xl font-semibold text-white leading-tight mb-3">
              Contact Us
            </h1>
            <p class="text-sm text-gray-200 mb-6">
              Got a merchant issue, bug, or collab? Kirim pesan — kita respond cepat.
            </p>

            <!-- Contact cards -->
            <div class="grid gap-3">
              <button @click="copy('phone')"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-white/3 transition-colors" type="button"
                aria-label="Copy phone">
                <svg class="w-6 h-6 text-purple-300" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3h14v14H2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7 7h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <div class="text-left">
                  <div class="text-xs text-gray-300">Phone</div>
                  <div class="text-white font-medium">+62 812-3456-7890</div>
                </div>
                <div class="ml-auto text-sm text-indigo-200">Copy</div>
              </button>

              <button @click="copy('email')"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-white/3 transition-colors" type="button"
                aria-label="Copy email">
                <svg class="w-6 h-6 text-pink-300" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l9 6 9-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5" />
                </svg>
                <div class="text-left">
                  <div class="text-xs text-gray-300">Email</div>
                  <div class="text-white font-medium">merchant-support@company.id</div>
                </div>
                <div class="ml-auto text-sm text-indigo-200">Copy</div>
              </button>

              <div class="flex items-center gap-3 p-3 rounded-lg bg-white/2">
                <svg class="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13s-7-7.75-7-13c0-3.866 3.134-7 7-7z"
                    stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="text-left">
                  <div class="text-xs text-gray-300">Office</div>
                  <div class="text-white font-medium">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>

            <!-- Social row -->
            <div class="mt-6 flex gap-3">
              <a class="p-2 rounded-lg hover:bg-white/4 transition-colors" href="#" aria-label="Twitter">
                <svg class="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 4.999a9.3 9.3 0 0 1-2.357.646A4.11 4.11 0 0 0 22.338 3a8.221 8.221 0 0 1-2.605.996 4.106 4.106 0 0 0-6.993 3.744 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2.8 8.713v.052a4.106 4.106 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.085.145c-.264 0-.52-.026-.77-.075a4.108 4.108 0 0 0 3.833 2.85A8.233 8.233 0 0 1 1.5 19.54 11.62 11.62 0 0 0 7.29 21c7.547 0 11.675-6.254 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0 0 23 4.999z"
                    fill="currentColor" />
                </svg>
              </a>
              <a class="p-2 rounded-lg hover:bg-white/4 transition-colors" href="#" aria-label="LinkedIn">
                <svg class="w-5 h-5 text-sky-300" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 4-2z" stroke="currentColor"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <rect x="2" y="9" width="4" height="12" rx="1" stroke="currentColor" stroke-width="1.4" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.4" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Small map placeholder -->
          <div class="mt-6 rounded-xl overflow-hidden border border-white/6">
            <div
              class="w-full h-44 md:h-56 bg-gradient-to-br from-indigo-900/30 to-transparent flex items-center justify-center text-sm text-gray-300">
              MAP / LOCATION (placeholder)
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <form @submit.prevent="handleSubmit"
          class="backdrop-blur-md bg-gradient-to-br from-white/4 to-white/6 border border-white/6 rounded-2xl p-6 shadow-xl"
          novalidate aria-label="Contact form">
          <div class="mb-4">
            <label for="name" class="text-xs text-gray-300 block mb-2">Name</label>
            <input id="name" v-model="form.name" :class="inputClass('name')" type="text" placeholder="Your name"
              required aria-required="true" />
            <p v-if="errors.name" class="text-rose-400 text-xs mt-1">{{ errors.name }}</p>
          </div>

          <div class="mb-4">
            <label for="email" class="text-xs text-gray-300 block mb-2">Email</label>
            <input id="email" v-model="form.email" :class="inputClass('email')" type="email"
              placeholder="you@company.com" required aria-required="true" />
            <p v-if="errors.email" class="text-rose-400 text-xs mt-1">{{ errors.email }}</p>
          </div>

          <div class="mb-4">
            <label for="subject" class="text-xs text-gray-300 block mb-2">Subject</label>
            <input id="subject" v-model="form.subject" :class="inputClass('subject')" type="text"
              placeholder="Short subject" />
            <p v-if="errors.subject" class="text-rose-400 text-xs mt-1">{{ errors.subject }}</p>
          </div>

          <div class="mb-4">
            <label for="message" class="text-xs text-gray-300 block mb-2">Message</label>
            <textarea id="message" v-model="form.message" :class="inputClass('message') + ' min-h-[140px] resize-y'"
              placeholder="Describe the issue or question..." required aria-required="true"></textarea>
            <p v-if="errors.message" class="text-rose-400 text-xs mt-1">{{ errors.message }}</p>
          </div>

          <div class="flex items-center gap-3">
            <button :disabled="loading" type="submit"
              class="inline-flex items-center gap-3 px-5 py-2 rounded-lg font-medium transition disabled:opacity-60"
              :class="loading ? 'bg-indigo-500 text-white' : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-[1.02]'"
              aria-live="polite">
              <svg v-if="!loading" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M2 12l20-9-9 20-3-8-8-3z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <svg v-else class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" stroke-dasharray="31.4 31.4" />
              </svg>
              <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
            </button>

            <button type="button" @click="reset()"
              class="px-4 py-2 rounded-lg border border-white/8 text-sm text-gray-200 hover:bg-white/3 transition">
              Reset
            </button>
          </div>

          <p v-if="status.message" :class="status.ok ? 'text-green-300 mt-4' : 'text-rose-400 mt-4'">
            {{ status.message }}
          </p>

          <p class="text-xs text-gray-400 mt-6">
            By sending you agree to our internal comms. Kami respon kerja hours. 遅い時はごめんね (ごめんね).
          </p>
        </form>
      </section>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const loading = ref(false);
const status = reactive({ ok: false, message: '' });

function validateEmail(email) {
  // digit-by-digit safe regex — simple and reliable
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateAll() {
  let ok = true;
  errors.name = form.name.trim() ? '' : 'Name is required';
  errors.email = form.email.trim() ? '' : 'Email is required';
  if (!errors.email && !validateEmail(form.email)) {
    errors.email = 'Invalid email';
  }
  errors.message = form.message.trim() ? '' : 'Message is required';
  // subject optional, but limit length
  errors.subject = form.subject.length > 120 ? 'Subject too long' : '';

  Object.values(errors).forEach((v) => {
    if (v) ok = false;
  });
  return ok;
}

function inputClass(field) {
  return [
    'w-full',
    'rounded-lg',
    'px-4',
    'py-3',
    'bg-white/3',
    'border',
    'border-white/6',
    'text-white',
    'placeholder-gray-400',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-purple-400/30',
    'transition',
    errors[field] ? 'ring-2 ring-rose-500/30' : ''
  ].join(' ');
}

async function handleSubmit() {
  status.message = '';
  status.ok = false;

  if (!validateAll()) {
    status.message = 'Fix the errors first.';
    return;
  }

  loading.value = true;
  try {
    // Change endpoint sesuai backend lo. Kalau ga ada, ini fallback mock.
    const endpoint = '/api/contact'; // <-- ganti kalau perlu
    const payload = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      timestamp: new Date().toISOString(),
    };

    // attempt to POST. If endpoint missing, this will likely 404 — handle graceful.
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // try read error message, but fallback generic
      let text = 'Server error';
      try { const json = await res.json(); text = json.message || text; } catch (e) { }
      throw new Error(text);
    }

    // success
    status.ok = true;
    status.message = 'Message sent. Thanks.';
    reset(false); // keep status but clear form
  } catch (err) {
    // kalau endpoint ga ada atau network error, jangan crash
    status.ok = false;
    status.message = `Failed to send: ${err.message || 'unknown'}`;
  } finally {
    loading.value = false;
  }
}

function reset(clearStatus = true) {
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
  Object.keys(errors).forEach(k => errors[k] = '');
  if (clearStatus) {
    status.ok = false;
    status.message = '';
  }
}

function copy(which) {
  const value = which === 'phone' ? '+62 812-3456-7890' : 'merchant-support@company.id';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(value).then(() => {
      status.ok = true;
      status.message = `${which === 'phone' ? 'Phone' : 'Email'} copied to clipboard.`;
      setTimeout(() => { status.message = ''; status.ok = false; }, 2200);
    }).catch(() => {
      status.ok = false;
      status.message = 'Copy failed';
    });
  } else {
    // fallback
    try {
      const ta = document.createElement('textarea');
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      status.ok = true;
      status.message = 'Copied.';
      setTimeout(() => { status.message = ''; status.ok = false; }, 2200);
    } catch {
      status.ok = false;
      status.message = 'Copy failed';
    }
  }
}
</script>

<style scoped>
/* Small polished styles on top of Tailwind */
input::placeholder,
textarea::placeholder {
  color: rgba(203, 213, 225, 0.6);
}

/* subtle focused border */
input:focus,
textarea:focus {
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.08);
}

/* make form elements look smooth on iOS */
input,
textarea,
button {
  -webkit-tap-highlight-color: transparent;
}

/* accessibility: prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
