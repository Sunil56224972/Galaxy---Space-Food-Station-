<template>
  <div class="the-header-mobile" :class="{ 'is-open': isOpen }">
    <div class="the-header-mobile__bar container">
      <a href="#hero" class="the-header-mobile__logo" data-sound-click="click">
        <TheLogo />
      </a>
      <TheSoundSwitcherMobile />
      <TheHamburger :is-open="isOpen" @click="toggleMenu" />
    </div>
    <nav class="the-header-mobile__nav">
      <div class="the-header-mobile__nav__inner container">
        <TheNav :items="navItems" @item-click="closeMenu" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "~/components/TheLogo.vue";
import TheNav from "~/components/TheNav.vue";
import TheSoundSwitcherMobile from "~/components/TheSoundSwitcherMobile.vue";
import TheHamburger from "~/components/TheHamburger.vue";

const isOpen = ref(false);

const navItems = [
  { label: "How it works", href: "#how" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "mailto:sunilnathyogi008@gmail.com", isEmail: true },
];

function toggleMenu() { isOpen.value = !isOpen.value; }
function closeMenu() { isOpen.value = false; }
</script>

<style scoped>
.the-header-mobile { position: relative; }
.the-header-mobile__bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-block: 0.75rem;
  position: relative;
  z-index: 5;
}
.the-header-mobile__logo { width: 12.5rem; }
.the-header-mobile__nav {
  background-color: var(--color-red);
  border: 3px solid #000;
  border-radius: 24px;
  height: 0;
  left: 10px;
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 0;
  transition: height 0.55s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: -1;
}
.the-header-mobile.is-open .the-header-mobile__nav { height: 360px; }
.the-header-mobile__nav__inner {
  align-items: flex-end;
  display: flex;
  height: 100%;
  padding-bottom: 2rem;
}
</style>
