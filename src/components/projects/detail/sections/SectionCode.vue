<template>
  <div class="space-y-5">

    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold text-black">Code Repositories</h2>
      <span class="text-xs text-black/35 font-medium">{{ items.length }} repo{{ items.length !== 1 ? 's' : '' }}</span>
    </div>

    <!-- Empty state -->
    <div v-if="items.length === 0" class="flex flex-col items-center justify-center py-16 gap-3 text-center rounded-xl border border-dashed border-black/12">
      <svg class="h-8 w-8 text-black/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
      <p class="text-sm font-medium text-black/30">No public repositories</p>
      <p class="text-xs text-black/20 max-w-xs">This project is a private engagement — source code is not available publicly.</p>
    </div>

    <!-- Repository table -->
    <div v-else class="overflow-x-auto rounded-xl border border-black/8">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-black/8 text-left">
            <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/35">Repository</th>
            <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/35 hidden sm:table-cell">Branch</th>
            <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/35 hidden md:table-cell">Last Commit</th>
            <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/35">Status</th>
            <th class="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black/35 hidden sm:table-cell">Visibility</th>
            <th class="w-24"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="repo in items"
            :key="repo.id"
            class="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors"
          >
            <!-- Name + description -->
            <td class="px-5 py-4">
              <p class="font-semibold text-black font-mono text-sm">{{ repo.title }}</p>
              <p v-if="repo.description" class="text-[11px] text-black/40 mt-0.5 max-w-[280px]">{{ repo.description }}</p>
            </td>

            <!-- Branch -->
            <td class="px-5 py-4 hidden sm:table-cell">
              <span class="inline-flex items-center gap-1.5 rounded-md bg-black/[0.04] px-2.5 py-1 text-[11px] font-mono font-medium text-black/60">
                <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                  <path d="M18 9a9 9 0 01-9 9"/>
                </svg>
                {{ repo.branch }}
              </span>
            </td>

            <!-- Last commit -->
            <td class="px-5 py-4 text-sm text-black/45 hidden md:table-cell">
              {{ repo.lastCommit }}
            </td>

            <!-- Status dot -->
            <td class="px-5 py-4">
              <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold" :class="statusColor(repo.status)">
                <span class="h-1.5 w-1.5 rounded-full flex-shrink-0" :class="statusDot(repo.status)"></span>
                {{ repo.status }}
              </span>
            </td>

            <!-- Visibility -->
            <td class="px-5 py-4 hidden sm:table-cell">
              <span class="text-[11px] font-medium text-black/40">{{ repo.visibility }}</span>
            </td>

            <!-- Action -->
            <td class="px-5 py-4 text-right">
              <a
                :href="repo.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-black/60 hover:text-black transition-colors"
              >
                GitHub
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v11h11" />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
})

const statusColor = (s) => {
  if (s === 'Active') return 'text-emerald-600'
  if (s === 'Completed') return 'text-black/40'
  return 'text-amber-600'
}

const statusDot = (s) => {
  if (s === 'Active') return 'bg-emerald-500'
  if (s === 'Completed') return 'bg-black/25'
  return 'bg-amber-400'
}
</script>
