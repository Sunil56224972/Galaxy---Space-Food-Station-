<template>
  <SectionLocation :blok="blok" v-editable="blok" />
</template>
<script setup lang="ts">
import SectionLocation from "~/components/SectionLocation.vue";
defineProps<{ blok: Record<string, any> }>();
</script>
