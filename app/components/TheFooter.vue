<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 px-6 border-t border-border">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span class="font-mono text-xs text-text-dim">
        &copy; {{ year }} Nurpais Orozulbaev
      </span>
      <span class="font-mono text-xs text-text-dim">
        Built with Nuxt · Tailwind · GSAP
      </span>
    </div>
  </footer>
</template>
