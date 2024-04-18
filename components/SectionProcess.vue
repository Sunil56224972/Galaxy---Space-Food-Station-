<template>
  <section class="section-process" id="how">
    <div class="section-process__scroll-trigger" ref="triggerEl">
      <div class="section-process__sticky">
        <div class="section-process__content container">
          <div class="section-process__header">
            <slot name="title" />
          </div>
          <div class="section-process__steps">
            <div
              v-for="(step, i) in blok?.steps"
              :key="step._uid"
              class="section-process__step"
              :class="{ 'is-active': activeStep === i }"
            >
              <div class="section-process__step__number">0{{ i + 1 }}</div>
              <div class="section-process__step__text">
                <RichText :text="step.title" />
              </div>
            </div>
          </div>
        </div>
        <div class="section-process__three" ref="threeEl" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RichText from "~/components/RichText.vue";

const props = defineProps<{ blok?: Record<string, any> }>();

const triggerEl = ref<HTMLDivElement | null>(null);
const threeEl = ref<HTMLDivElement | null>(null);
const activeStep = ref(0);

onMounted(() => {
  if (!process.client) return;
  gsap.registerPlugin(ScrollTrigger);

  const steps = props.blok?.steps ?? [];
  if (!steps.length || !triggerEl.value) return;

  ScrollTrigger.create({
    trigger: triggerEl.value,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      activeStep.value = Math.min(
        steps.length - 1,
        Math.floor(self.progress * steps.length)
      );
    },
  });
});

onUnmounted(() => { ScrollTrigger.getAll().forEach((t) => t.kill()); });
</script>

<style scoped>
.section-process { position: relative; }
.section-process__scroll-trigger {
  height: 700svh;
  position: relative;
}
.section-process__sticky {
  align-items: center;
  display: flex;
  height: 100svh;
  justify-content: space-between;
  position: sticky;
  top: 0;
}
.section-process__content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 2;
}
.section-process__steps { display: flex; flex-direction: column; gap: 1.5rem; }
.section-process__step {
  display: flex;
  gap: 1rem;
  opacity: 0.3;
  transition: opacity 0.5s ease;
}
.section-process__step.is-active { opacity: 1; }
.section-process__three {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  z-index: 1;
}
</style>
