<template>
  <div class="hero-slider-progress">
    <div
      v-for="i in total"
      :key="i"
      class="hero-slider-progress__dot"
      :class="{ 'is-active': i - 1 === active }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ total: number; active: number }>();
</script>

<style scoped>
.hero-slider-progress {
  align-items: center;
  display: flex;
  gap: 0.5rem;
}
.hero-slider-progress__dot {
  background: currentColor;
  border-radius: 4px;
  height: 10px;
  overflow: hidden;
  transition: width 0.55s cubic-bezier(0.25, 1, 0.5, 1);
  width: 10px;
}
.hero-slider-progress__dot.is-active { width: 6rem; }
</style>
