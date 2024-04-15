<template>
  <div class="hero-slider" ref="sliderEl">
    <div class="hero-slider__slides swiper-wrapper">
      <HeroSliderItem
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        class="swiper-slide"
      />
    </div>
    <div class="hero-slider__controls">
      <ButtonControls direction="prev" @click="slidePrev" />
      <HeroSliderProgress :total="items.length" :active="activeIndex" />
      <ButtonControls direction="next" @click="slideNext" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSliderItem from "~/components/HeroSliderItem.vue";
import HeroSliderProgress from "~/components/HeroSliderProgress.vue";
import ButtonControls from "~/components/ButtonControls.vue";

const props = defineProps<{ items: any[] }>();

const sliderEl = ref<HTMLDivElement | null>(null);
const activeIndex = ref(0);

let swiper: any = null;

function slidePrev() { swiper?.slidePrev(); }
function slideNext() { swiper?.slideNext(); }

onMounted(async () => {
  if (!sliderEl.value || !process.client) return;
  const { default: Swiper } = await import("swiper");
  swiper = new Swiper(sliderEl.value, {
    loop: true,
    allowTouchMove: true,
    on: {
      slideChange: (s: any) => { activeIndex.value = s.realIndex; },
    },
  });
});

onUnmounted(() => swiper?.destroy());
</script>

<style scoped>
.hero-slider {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow: visible;
  width: 100%;
}
.hero-slider__slides { overflow: visible; }
.hero-slider__controls {
  align-items: center;
  display: flex;
  gap: 1rem;
}
</style>
