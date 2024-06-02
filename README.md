<div align="center">

<img src="docs/preview-preloader.png" alt="Planetoño – Space Food Station" width="100%"/>

# 🪐 PLANETOÑO — Space Food Station

**An immersive, animated space-themed food experience built with Nuxt 3, Three.js, GSAP, Rive, and Storyblok.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-E8392B?style=for-the-badge)](https://planeteno-food-station.sunilnathyogi008.workers.dev/)
[![Built With Nuxt](https://img.shields.io/badge/Nuxt-3-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com)

---

**Designed & Developed by [Sunil Nathyogi](https://linkedin.com/in/sunil-81340839a)**

</div>

---

## ✨ Preview

<table>
  <tr>
    <td align="center" width="50%">
      <img src="docs/preview-hero.png" alt="Hero Section – Galaxy Bite" width="100%" style="border-radius: 12px;" />
      <br/>
      <sub><b>🍔 Hero — Galaxy Bite</b><br/>Immersive 3D food explorer with animated slider</sub>
    </td>
    <td align="center" width="50%">
      <img src="docs/preview-locations.png" alt="Locations – Star Map" width="100%" style="border-radius: 12px;" />
      <br/>
      <sub><b>🗺️ Locations — Star Map</b><br/>Interactive constellation maps with clickable markers</sub>
    </td>
  </tr>
</table>

---

## 🚀 About the Project

**Planetoño** is a concept space food station — a fully immersive, premium web experience that combines:

- 🌌 **3D WebGL rendering** via Three.js with custom `.glb` models and Draco compression
- 🎮 **Rive animations** for the logo, navigation items, sound switcher, and preloader
- 🎯 **GSAP ScrollTrigger** for scroll-driven animations across all sections
- 🔊 **Immersive spatial audio** with a global sound system and mute toggle
- 📱 **Fully responsive** — custom layouts for desktop and mobile
- ⚡ **Nuxt 3 + Storyblok CMS** for content management and static generation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Nuxt 3** | Framework — SSG static generation |
| **Vue 3 + TypeScript** | Component architecture |
| **Three.js** | 3D WebGL scene with GLB models |
| **GSAP + ScrollTrigger** | Scroll animations |
| **Rive** | Interactive vector animations |
| **Lottie** | Decorative particle animations |
| **Swiper** | Hero product carousel |
| **Lenis** | Smooth scroll momentum |
| **Storyblok** | Headless CMS for content |

---

## 📁 Project Structure

```
planetono/
├── app.vue                    # Root entry point
├── nuxt.config.ts             # Nuxt configuration
├── pages/
│   └── index.vue              # Home page with Storyblok data
├── layouts/
│   └── default.vue            # Global layout (header, cursor)
├── components/
│   ├── ThePreloader.vue       # Rive logo preloader + GSAP exit
│   ├── TheHeader.vue          # Responsive header shell
│   ├── TheHeaderDesktop.vue   # Desktop nav with scroll bg
│   ├── TheHeaderMobile.vue    # Mobile hamburger + drawer
│   ├── TheCursor.vue          # Custom cursor with GSAP
│   ├── SectionHero.vue        # 3D hero with slider
│   ├── SectionProcess.vue     # ScrollTrigger step reveal
│   ├── SectionLocation.vue    # Interactive star maps
│   ├── SectionContacts.vue    # Footer with social links
│   ├── HeroSlider.vue         # Swiper carousel
│   ├── SpaceMap.vue           # Constellation map
│   ├── MapMarker.vue          # Popover location pins
│   └── ...20+ components
├── composables/
│   ├── useSound.ts            # Global audio system
│   ├── useLenis.ts            # Smooth scroll
│   ├── useScrollTrigger.ts    # GSAP ScrollTrigger wrapper
│   └── useTrack.ts            # Analytics events
├── storyblok/                 # Storyblok CMS wrappers
├── assets/css/main.css        # Global styles + design tokens
└── _nuxt/                     # Production build output
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A [Storyblok](https://storyblok.com) account (for CMS content)

### Installation

```bash
# Clone the repo
git clone https://github.com/Sunil56224972/PLANETONO---Space-Food-Station-.git
cd PLANETONO---Space-Food-Station-

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your STORYBLOK_TOKEN to .env

# Start dev server
npm run dev
```

### Build

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

---

## 🌐 Live Demo

👉 **[planeteno-food-station.sunilnathyogi008.workers.dev](https://planeteno-food-station.sunilnathyogi008.workers.dev/)**

> **Tip:** Use headphones for the full immersive audio experience 🎧

---

## 👨‍💻 Author

**Sunil Nathyogi**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sunil-81340839a)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/kali_linux_user_)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sunilnathyogi008@gmail.com)

---

<div align="center">

Built with ♥️ from scratch by **Sunil Nathyogi**

© 2024 Sunil Nathyogi — All rights reserved.

</div>
