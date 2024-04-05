import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollTrigger() {
  const ctx = ref<gsap.Context | null>(null);

  function createContext(fn: () => void, scope?: Element | string) {
    ctx.value = gsap.context(fn, scope);
  }

  onUnmounted(() => {
    ctx.value?.revert();
  });

  return { gsap, ScrollTrigger, createContext };
}
