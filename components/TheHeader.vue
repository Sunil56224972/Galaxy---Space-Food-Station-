<template>
  <header class="the-header">
    <TheHeaderDesktop />
    <TheHeaderMobile />
  </header>
</template>

<script setup lang="ts">
import TheHeaderDesktop from "~/components/TheHeaderDesktop.vue";
import TheHeaderMobile from "~/components/TheHeaderMobile.vue";
</script>

<style scoped>
.the-header {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
}
@media only screen and (max-width: 900px) {
  .the-header :deep(.the-header-desktop) { display: none; }
}
@media only screen and (min-width: 901px) {
  .the-header :deep(.the-header-mobile) { display: none; }
}
</style>
