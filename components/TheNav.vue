<template>
  <nav class="the-nav">
    <TheNavItem
      v-for="item in items"
      :key="item.href"
      :item="item"
      @click="$emit('item-click', item)"
    />
  </nav>
</template>

<script setup lang="ts">
import TheNavItem from "~/components/TheNavItem.vue";

interface NavItem {
  label: string;
  href: string;
  isEmail?: boolean;
}

defineProps<{ items: NavItem[] }>();
defineEmits(["item-click"]);
</script>

<style scoped>
.the-nav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
}
</style>
