<template>
  <div class="space-map" ref="mapEl">
    <div class="space-map__image">
      <img :src="blok?.image?.filename" :alt="blok?.name ?? 'Space location map'" />
    </div>
    <MapMarker
      v-for="marker in blok?.markers"
      :key="marker._uid"
      :marker="marker"
      :map-el="mapEl"
    />
  </div>
</template>

<script setup lang="ts">
import MapMarker from "~/components/MapMarker.vue";
defineProps<{ blok?: Record<string, any> }>();
const mapEl = ref<HTMLDivElement | null>(null);
</script>

<style scoped>
.space-map {
  aspect-ratio: 1;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.space-map__image {
  height: 100%;
  width: 100%;
}
.space-map__image img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
