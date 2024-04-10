<template>
  <button
    type="button"
    class="button-main button-shadow"
    v-bind="$attrs"
    data-sound-click="click"
  >
    <span class="button-main__label"><slot /></span>
  </button>
</template>

<style scoped>
.button-main {
  align-items: center;
  background: var(--color-light);
  border: 2px solid var(--color-black);
  border-radius: 12px;
  color: var(--color-black);
  cursor: none;
  display: inline-flex;
  font-family: "Futura Passata", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  height: 3.25rem;
  justify-content: center;
  letter-spacing: -0.06em;
  outline: none;
  padding-inline: 1rem;
  position: relative;
  text-transform: uppercase;
  transition: transform 0.15s ease;
}
.button-main:active { transform: scale(0.97); }
.button-main__label { transform: translate(-0.025em, 0.05em); }
</style>
