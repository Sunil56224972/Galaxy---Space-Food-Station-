<template>
  <button
    class="the-sound-switcher"
    :aria-label="isMuted ? 'Unmute sound' : 'Mute sound'"
    data-sound-hover="hover"
    @click="handleToggle"
  >
    <span class="the-sound-switcher__sizer" aria-hidden="true" />
    <canvas ref="riveCanvas" class="the-sound-switcher__canvas" width="200" height="100" />
  </button>
</template>

<script setup lang="ts">
import { useSound } from "~/composables/useSound";

const { toggleMute, isMuted } = useSound();
const riveCanvas = ref<HTMLCanvasElement | null>(null);

function handleToggle() { toggleMute(); }

onMounted(async () => {
  if (!riveCanvas.value || !process.client) return;
  const { Rive } = await import("@rive-app/canvas");
  new Rive({
    src: "/rive.riv",
    canvas: riveCanvas.value,
    artboard: "sound-switcher",
    autoplay: true,
  });
});
</script>

<style scoped>
.the-sound-switcher {
  background: none;
  border: none;
  cursor: none;
  font-weight: 700;
  outline: none;
  overflow: hidden;
  position: relative;
}
.the-sound-switcher__sizer {
  display: inline-block;
  height: 30px;
  opacity: 0;
  pointer-events: none;
  width: 136px;
}
.the-sound-switcher__canvas {
  height: 100px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  z-index: 5;
}
</style>
