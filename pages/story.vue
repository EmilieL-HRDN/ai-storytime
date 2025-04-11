<template>
  <h2 class="text-2xl font-bold mb-4 text-white">🧚 Voici ton histoire !</h2>
  <div class="max-w-xl mx-auto p-6 bg-white h-150 rounded-2xl overflow-scroll">
    <p class="text-lg leading-relaxed whitespace-pre-line">{{ story }}</p>
  </div>
  <UButton
    icon="i-lucide-rocket"
    class="mt-5 w-48 text-center bg-amber-400 text-primary-100 hover:text-white hover:bg-primary-100"
    size="xl"
    as="NuxtLink"
    to="/"
  >
    Nouvelle histoire
  </UButton>
</template>

<script setup>
const route = useRoute();
const story = ref("");
const { data } = await useFetch("/api/generate-story", {
  method: "POST",
  body: {
    character: route.query.character,
    place: route.query.place,
    object: route.query.object,
  },
});
story.value = data.value?.story || "Erreur de génération.";
</script>
