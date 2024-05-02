<template>
  <SectionContacts :blok="blok" v-editable="blok" />
</template>
<script setup lang="ts">
import SectionContacts from "~/components/SectionContacts.vue";
defineProps<{ blok: Record<string, any> }>();
</script>
