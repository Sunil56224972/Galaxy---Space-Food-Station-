<template>
  <SectionHero :blok="blok" v-editable="blok" />
</template>
<script setup lang="ts">
import SectionHero from "~/components/SectionHero.vue";
defineProps<{ blok: Record<string, any> }>();
</script>
