<template>
  <div class="__nuxt">
    <ThePreloader />
    <TheHeader />
    <div class="__page">
      <slot />
    </div>
    <TheCursor />
  </div>
</template>

<script setup lang="ts">
import ThePreloader from "~/components/ThePreloader.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheCursor from "~/components/TheCursor.vue";
</script>
