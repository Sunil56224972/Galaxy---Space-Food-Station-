<template>
  <div class="the-preloader" :class="{ 'is-loaded': isLoaded }">
    <canvas ref="logoCanvas" class="the-preloader__logo" />
    <div class="the-preloader__content">
      <div class="the-preloader__button" data-sound-click="click" @click="handleStart">
        <ButtonMain>StArt</ButtonMain>
      </div>
      <p class="the-preloader__message">
        <span>Immersive sound ahead. Use headphones for best effect</span>
      </p>
    </div>
    <div class="the-preloader__bg" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import ButtonMain from "~/components/ButtonMain.vue";

const logoCanvas = ref<HTMLCanvasElement | null>(null);
const isLoaded = ref(false);

async function initRive() {
  if (!logoCanvas.value || !process.client) return;
  const { Rive } = await import("@rive-app/canvas");
  const rive = new Rive({
    src: "/rive.riv",
    canvas: logoCanvas.value,
    autoplay: true,
    onLoad: () => rive.resizeDrawingSurfaceToCanvas(),
  });
}

function handleStart() {
  isLoaded.value = true;
  gsap.to(".the-preloader", {
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    onComplete: () => gsap.set(".the-preloader", { display: "none" }),
  });
}

onMounted(() => {
  initRive();
  window.addEventListener("load", () => {
    setTimeout(() => { isLoaded.value = true; }, 800);
  });
});
</script>

<style scoped>
.the-preloader {
  align-items: flex-end;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
}
.the-preloader__content {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 32px;
  z-index: 5;
}
.the-preloader__button {
  opacity: 0;
  pointer-events: none;
  transform: translateY(1rem);
  transition: all 1.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.the-preloader.is-loaded .the-preloader__button {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.the-preloader__bg {
  aspect-ratio: 0.588;
  background-color: var(--color-red);
  border: 3px solid #000;
  border-radius: 50%;
  height: 64.75%;
  left: 50%;
  position: absolute;
  top: 52.5%;
  transform: translate(-50%, -50%) scale(8);
  z-index: -1;
}
.the-preloader__logo {
  left: 50%;
  max-width: 75%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 21.875rem;
}
</style>
