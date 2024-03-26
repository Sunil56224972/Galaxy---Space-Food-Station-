<template>
  <button
    class="the-hamburger button-shadow"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
    data-sound-click="click"
    @click="$emit('click')"
  >
    <span>{{ isOpen ? "close" : "menu" }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ isOpen?: boolean }>();
defineEmits(["click"]);
</script>

<style scoped>
.the-hamburger {
  align-items: center;
  background: none;
  border: none;
  border-radius: 12px;
  cursor: none;
  display: flex;
  font-family: "Futura Passata", sans-serif;
  font-size: 18px;
  font-weight: 700;
  height: 2.625rem;
  justify-content: center;
  letter-spacing: -0.03em;
  outline: none;
  padding-inline: 0.75rem;
  position: relative;
  text-transform: uppercase;
  z-index: 5;
}
</style>
