<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const handleClear = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-bg flex items-center justify-center px-6">
    <div class="text-center max-w-md">
      <p class="font-mono text-xs text-accent tracking-widest uppercase mb-4">
        Error {{ props.error.statusCode }}
      </p>
      <h1 class="font-sans text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-text mb-4">
        Something went wrong.
      </h1>
      <p class="text-text-muted leading-relaxed mb-8">
        {{ props.error.message || 'The page you are looking for could not be found.' }}
      </p>
      <button
        class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-sm font-medium rounded-full hover:bg-accent-dim transition-colors duration-300 cursor-pointer"
        @click="handleClear"
      >
        Back to home
      </button>
    </div>
  </div>
</template>
