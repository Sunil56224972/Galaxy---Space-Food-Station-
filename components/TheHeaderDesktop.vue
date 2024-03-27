<template>
  <div class="the-header-desktop container" :class="{ 'is-bg-visible': isBgVisible }">
    <TheNav class="the-header-desktop__nav --start" :items="navStart" />
    <a class="the-header-desktop__logo" href="#hero" data-sound-click="click">
      <TheLogo />
    </a>
    <TheNav class="the-header-desktop__nav --end" :items="navEnd" />
    <TheSoundSwitcher />
    <div class="the-header-desktop__bg" />
  </div>
</template>

<script setup lang="ts">
import TheNav from "~/components/TheNav.vue";
import TheLogo from "~/components/TheLogo.vue";
import TheSoundSwitcher from "~/components/TheSoundSwitcher.vue";

const isBgVisible = ref(false);

const navStart = [
  { label: "How it works", href: "#how" },
  { label: "Locations", href: "#locations" },
];

const navEnd = [
  { label: "Contact", href: "mailto:sunilnathyogi008@gmail.com", isEmail: true },
];

onMounted(() => {
  const hero = document.querySelector("#hero");
  if (!hero) return;
  const observer = new IntersectionObserver(
    ([entry]) => { isBgVisible.value = !entry.isIntersecting; },
    { threshold: 0 }
  );
  observer.observe(hero);
  onUnmounted(() => observer.disconnect());
});
</script>

<style scoped>
.the-header-desktop {
  align-items: center;
  display: flex;
  height: 7.5rem;
  justify-content: center;
  position: relative;
}
.the-header-desktop__logo {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 21.875rem;
}
.the-header-desktop__nav {
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  display: flex;
}
.the-header-desktop__nav.--start { right: calc(50% + 15.9375rem); }
.the-header-desktop__nav.--end { left: calc(50% + 15.9375rem); }
.the-header-desktop__bg {
  background-color: transparent;
  height: 100%;
  inset: 0;
  position: absolute;
  transition: background-color 0.55s cubic-bezier(0.25, 1, 0.5, 1);
  width: 100%;
  z-index: -1;
}
.the-header-desktop.is-bg-visible .the-header-desktop__bg {
  background-color: var(--color-red);
}
</style>
