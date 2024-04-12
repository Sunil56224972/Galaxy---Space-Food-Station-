<template>
  <div class="hero-slider-item">
    <div class="hero-slider-item__title">
      <RichText :text="item?.title" />
    </div>
    <div class="hero-slider-item__row">
      <div class="hero-slider-item__desc-1">
        <RichText :text="item?.description_1" />
      </div>
      <div class="hero-slider-item__desc-2">
        <RichText :text="item?.description_2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RichText from "~/components/RichText.vue";
defineProps<{ item: any }>();
</script>

<style scoped>
.hero-slider-item {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.hero-slider-item__title {
  font-family: "Futura Passata", sans-serif;
  font-size: clamp(3.5rem, 6vw, 7.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.9;
  text-transform: uppercase;
  will-change: transform;
}
.hero-slider-item__row {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}
.hero-slider-item__desc-1,
.hero-slider-item__desc-2 {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0.8;
}
</style>
