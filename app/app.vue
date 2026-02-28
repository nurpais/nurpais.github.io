<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div class="relative">
    <TheNav />
    <main>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>
