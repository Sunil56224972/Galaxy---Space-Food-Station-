# Planetoño — Development Changelog

All notable changes to this project will be documented here.

---

## [1.0.0] — 2024-05-29

### Added
- Full production build and static export via `nuxt generate`
- Vercel deployment configuration
- README with setup instructions and screenshots

### Changed
- Optimized Three.js and GSAP chunk splitting in `nuxt.config.ts`
- Lazy-loaded Rive and Swiper with dynamic imports for faster initial load

### Fixed
- Custom cursor hidden on touch devices with `hover: none` media query
- Mobile header z-index stacking issue in Safari

---

## [0.9.0] — 2024-05-16

### Added
- `perf: lazy-load Rive and Swiper` — dynamic imports reduce initial JS bundle by ~40%
- `feat: accessibility aria-labels` on all interactive buttons

---

## [0.8.0] — 2024-05-02

### Added
- Storyblok `v-editable` wrapper components for all sections
- `SectionContacts` footer with social links and logo animation

---

## [0.7.0] — 2024-04-25

### Added
- `SpaceMap` component with star constellation images
- `MapMarker` with smart popover (auto-flips left/right based on position)
- `SectionLocation` responsive 2-column grid

---

## [0.6.0] — 2024-04-18

### Added
- `SectionProcess` with GSAP ScrollTrigger step-by-step reveal (700svh scroll length)
- `SectionHero` with Three.js 3D background scene

---

## [0.5.0] — 2024-04-12

### Added
- `HeroSlider` built on Swiper with loop and custom prev/next controls
- `HeroSliderItem` with title + two-column description layout
- `HeroSliderProgress` with expanding active dot indicator

---

## [0.4.0] — 2024-04-05

### Added
- `useSound` — global HTML5 Audio manager with mute state
- `useLenis` — smooth scroll via `@studio-freight/lenis`
- `useScrollTrigger` — GSAP ScrollTrigger wrapper with auto-cleanup on unmount
- `useTrack` — lightweight analytics event composable

---

## [0.3.0] — 2024-04-02

### Added
- `ThePreloader` — Rive logo animation with GSAP fade-out transition
- `TheCursor` — custom cursor following mouse with GSAP `power2.out` easing

---

## [0.2.0] — 2024-03-28

### Added
- `TheHeaderDesktop` with scroll-triggered background color change
- `TheHeaderMobile` with animated slide-down nav drawer
- `TheHamburger` toggle button
- `TheSoundSwitcher` and `TheSoundSwitcherMobile`

---

## [0.1.0] — 2024-03-12

### Added
- Initial Nuxt 3 project scaffold with TypeScript
- `nuxt.config.ts` with Storyblok module, CSS, and chunk splitting
- `app.vue` root component
- `layouts/default.vue` global layout
- `pages/index.vue` home page with Storyblok data fetching
- Base CSS design tokens (Futura Passata font, color palette, container)
