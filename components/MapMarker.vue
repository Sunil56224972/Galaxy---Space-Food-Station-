<template>
  <div
    class="map-marker"
    :style="{ left: `${marker?.x}%`, top: `${marker?.y}%` }"
  >
    <button
      class="map-marker__btn"
      :class="{ 'is-open': isOpen }"
      :aria-label="`View ${marker?.name}`"
      data-sound-click="click"
      @click="toggle"
    >
      <img class="map-marker__icon" src="/images/marker.svg" alt="" />
      <img class="map-marker__icon-open" src="/images/marker-open.svg" alt="" />
      <img class="map-marker__shadow" src="/images/marker-shadow.svg" alt="" />
    </button>
    <Transition name="popover">
      <div v-if="isOpen" class="map-marker__popover" :class="{ '--left': isLeft }">
        <p class="map-marker__popover-title">{{ marker?.name }}</p>
        <table class="map-marker__popover-table">
          <tr v-for="row in marker?.details" :key="row.label">
            <td class="label-col">{{ row.label }}</td>
            <td>{{ row.value }}</td>
          </tr>
        </table>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  marker?: Record<string, any>;
  mapEl?: HTMLDivElement | null;
}>();

const isOpen = ref(false);
const isLeft = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
  if (isOpen.value && props.mapEl) {
    const mapRect = props.mapEl.getBoundingClientRect();
    const markerX = (props.marker?.x ?? 0) / 100 * mapRect.width;
    isLeft.value = markerX > mapRect.width / 2;
  }
}
</script>

<style scoped>
.map-marker {
  position: absolute;
  transform: translate(-50%, -100%);
  z-index: 5;
}
.map-marker__btn {
  background: none;
  border: none;
  cursor: none;
  outline: none;
  padding: 0;
  position: relative;
}
.map-marker__icon,
.map-marker__icon-open { width: 2rem; }
.map-marker__icon-open { display: none; }
.map-marker__btn.is-open .map-marker__icon { display: none; }
.map-marker__btn.is-open .map-marker__icon-open { display: block; }
.map-marker__shadow {
  bottom: -0.5rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 2.5rem;
}
.map-marker__popover {
  background: var(--color-light);
  border: 2px solid var(--color-black);
  border-radius: 1rem;
  bottom: calc(100% + 1rem);
  color: var(--color-black);
  left: 50%;
  min-width: 12rem;
  padding: 1rem;
  position: absolute;
  transform: translateX(-50%);
}
.map-marker__popover.--left {
  left: auto;
  right: 0;
  transform: none;
}
.map-marker__popover-title {
  font-family: "Futura Passata", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.map-marker__popover-table { border-collapse: collapse; width: 100%; }
.map-marker__popover-table td {
  font-size: 0.75rem;
  padding: 0.2rem 0;
}
.label-col { font-weight: 600; opacity: 0.6; padding-right: 0.5rem; }
.popover-enter-active,
.popover-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.popover-enter-from,
.popover-leave-to { opacity: 0; transform: translateX(-50%) translateY(0.5rem); }
</style>
