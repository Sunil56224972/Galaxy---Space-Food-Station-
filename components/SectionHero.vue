<template>
  <section class="section-hero" id="hero">
    <div class="section-hero__three" ref="threeContainer" />
    <div class="section-hero__content container">
      <div class="section-hero__slider">
        <HeroSlider :items="blok?.slides ?? []" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSlider from "~/components/HeroSlider.vue";

defineProps<{ blok?: Record<string, any> }>();

const threeContainer = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  if (!threeContainer.value || !process.client) return;
  // Three.js scene initialized from worker via postMessage
  const worker = new Worker("/three/scroll_model.glb", { type: "module" });
  worker.postMessage({ type: "init", canvas: threeContainer.value });
});
</script>

<style scoped>
.section-hero {
  height: 100svh;
  overflow: hidden;
  position: relative;
}
.section-hero__three {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
}
.section-hero__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
}
.section-hero__slider {
  width: 33%;
}
@media only screen and (max-width: 1024px) {
  .section-hero__content {
    align-items: flex-end;
    padding-bottom: 2rem;
  }
  .section-hero__slider { width: 100%; }
}
</style>
