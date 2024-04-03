<template>
  <div ref="cursorEl" class="the-cursor" aria-hidden="true">
    <img src="/images/cursor.svg" alt="" width="40" height="40" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const cursorEl = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!cursorEl.value) return;
  const el = cursorEl.value;
  window.addEventListener("mousemove", (e) => {
    gsap.to(el, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
  });
});
</script>

<style scoped>
.the-cursor {
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transform: translate(-50%, -50%);
  width: 2.5rem;
  z-index: 9999;
}
.the-cursor img { width: 100%; }

@media (hover: none) {
  .the-cursor { display: none; }
}
</style>
