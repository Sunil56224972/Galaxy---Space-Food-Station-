<template>
  <SectionProcess :blok="blok" v-editable="blok" />
</template>
<script setup lang="ts">
import SectionProcess from "~/components/SectionProcess.vue";
defineProps<{ blok: Record<string, any> }>();
</script>
