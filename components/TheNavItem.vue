<template>
  <a
    class="the-nav-item"
    :href="item.href"
    :class="{ '--email': item.isEmail }"
    data-sound-hover="hover"
    data-sound-click="click"
    @click="$emit('click')"
  >
    <canvas ref="riveCanvas" class="the-nav-item__canvas" width="200" height="100" />
    <span class="the-nav-item__label">{{ item.label }}</span>
  </a>
</template>

<script setup lang="ts">
interface NavItem {
  label: string;
  href: string;
  isEmail?: boolean;
}

defineProps<{ item: NavItem }>();
defineEmits(["click"]);

const riveCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(async () => {
  if (!riveCanvas.value || !process.client) return;
  const { Rive } = await import("@rive-app/canvas");
  new Rive({
    src: "/rive.riv",
    canvas: riveCanvas.value,
    artboard: "nav-item",
    autoplay: false,
  });
});
</script>

<style scoped>
.the-nav-item {
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  overflow: hidden;
  position: relative;
}
.the-nav-item__label {
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
}
.the-nav-item__canvas {
  height: 100px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
}
</style>
