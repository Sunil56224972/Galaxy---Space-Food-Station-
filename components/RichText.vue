<template>
  <div class="rich-text" v-if="rendered" v-html="rendered" />
</template>

<script setup lang="ts">
import { renderRichText } from "@storyblok/nuxt";

const props = defineProps<{ text?: unknown }>();

const rendered = computed(() => {
  if (!props.text) return "";
  if (typeof props.text === "string") return props.text;
  try {
    return renderRichText(props.text as any);
  } catch {
    return String(props.text);
  }
});
</script>

<style scoped>
.rich-text { width: 100%; }
.rich-text :deep(p) { line-height: 1.6; }
.rich-text :deep(strong) { font-weight: 700; }
.rich-text :deep(em) { font-style: italic; }
.rich-text :deep(a) { text-decoration: underline; }
</style>
