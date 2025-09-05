<template>
  <section class="w-full py-12">
    <MacCard title="About Me" class="animate-fade-in">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
            Hi, i'm <span class="text-white">Hadi</span>
          </h1>
          <div>
            <span>im nobody. stop stalking me!!</span>
          </div>
        </div>

        <div>
          <img src="/img/kucing.jpeg" class="w-120 h-120" alt="">
        </div>
      </div>
    </MacCard>
  </section>
</template>

<script setup>
import MacCard from '../common/BaseCard.vue'
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}
</style>
