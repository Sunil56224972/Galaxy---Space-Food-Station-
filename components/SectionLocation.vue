<template>
  <section class="section-location" id="locations">
    <div class="section-location__header container">
      <slot name="title" />
    </div>
    <div class="section-location__maps container">
      <SpaceMap
        v-for="map in blok?.maps"
        :key="map._uid"
        :blok="map"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SpaceMap from "~/components/SpaceMap.vue";
defineProps<{ blok?: Record<string, any> }>();
</script>

<style scoped>
.section-location {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-block: 8rem;
  position: relative;
}
.section-location__header { text-align: center; }
.section-location__maps {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}
@media only screen and (max-width: 768px) {
  .section-location__maps { grid-template-columns: 1fr; }
}
</style>
