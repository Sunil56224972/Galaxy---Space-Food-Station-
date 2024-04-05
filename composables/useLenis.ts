import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export function useLenis() {
  function init() {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  function stop() {
    lenis?.stop();
  }
  function start() {
    lenis?.start();
  }
  function destroy() {
    lenis?.destroy();
    lenis = null;
  }
  function scrollTo(target: string | number | Element, options = {}) {
    lenis?.scrollTo(target, options);
  }

  return { init, stop, start, destroy, scrollTo };
}
