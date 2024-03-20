<script setup lang="ts">
import { useStoryblokApi } from "@storyblok/nuxt";

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories/home", {
  version: "published",
  resolve_links: "url",
});

const story = data.story;
const seo = story?.content?.seo?.[0];
const author = "Sunil Nathyogi";

useHead({
  title: seo?.main?.title ?? "Planetoño – Space Food Station",
  meta: [
    { name: "description", content: seo?.main?.description },
    { name: "author", content: author },
    { name: "designer", content: author },
    { property: "og:title", content: seo?.og_title ?? "Planetoño" },
    { property: "og:description", content: seo?.og_description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Planetoño" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: author },
  ],
});

onMounted(() => {
  const styles = ["background: #0e0e0e", "color: #fff", "padding: 24px 16px"].join(";");
  console.log(
    "%c Built from scratch by Sunil Nathyogi | https://linkedin.com/in/sunil-81340839a",
    styles
  );
});
</script>

<template>
  <main class="page-home">
    <template v-for="section in story.content.sections" :key="section._uid">
      <StoryblokComponent :blok="section" />
    </template>
  </main>
</template>
