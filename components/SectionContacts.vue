<template>
  <section class="section-contacts container" id="contact">
    <a
      id="sunil_logo"
      class="section-contacts__logo"
      href="https://linkedin.com/in/sunil-81340839a"
      target="_blank"
      rel="noopener noreferrer"
      @click="trackLogoClick"
      @mouseover="playLogoSound"
    >
      <img src="/images/sunil-jp.svg" alt="Sunil Nathyogi" />
    </a>

    <div class="section-contacts__title">
      <RichText :text="blok?.title" />
    </div>

    <footer class="section-contacts__footer">
      <a href="mailto:sunilnathyogi008@gmail.com" class="footer-link" data-sound-click="click">
        Gmail
      </a>
      <a
        href="https://linkedin.com/in/sunil-81340839a"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        data-sound-click="click"
      >
        LinkedIn
      </a>
      <a
        href="https://instagram.com/kali_linux_user_"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        data-sound-click="click"
      >
        Instagram
      </a>
      <span class="footer-year">© {{ year }}</span>
    </footer>
  </section>
</template>

<script setup lang="ts">
import RichText from "~/components/RichText.vue";
import { useSound } from "~/composables/useSound";
import { useTrack } from "~/composables/useTrack";

defineProps<{ blok?: Record<string, any> }>();

const { play } = useSound();
const { $track } = useTrack();
const year = new Date().getFullYear();

function playLogoSound() { play("logo", 0.1); }
function trackLogoClick() { $track("Click | Sunil logo"); }
</script>

<style scoped>
.section-contacts {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-height: 100svh;
  justify-content: center;
  padding-block: 6rem;
  position: relative;
  text-align: center;
}
.section-contacts__logo {
  display: block;
  width: 12.5rem;
  transition: transform 0.3s ease;
}
.section-contacts__logo:hover { transform: scale(1.05); }
.section-contacts__logo img { width: 100%; }
.section-contacts__footer {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-family: Poppins, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 1.5rem;
  justify-content: center;
}
.footer-link {
  opacity: 0.7;
  transition: opacity 0.2s;
}
.footer-link:hover { opacity: 1; }
.footer-year { opacity: 0.4; }
</style>
