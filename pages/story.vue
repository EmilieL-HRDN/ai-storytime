<template>
  <div class="max-w-xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">🧚 Voici ton histoire !</h2>
    <p v-if="story" class="text-lg leading-relaxed whitespace-pre-line">{{ story }}</p>
    <p v-else>Chargement de ton histoire magique...</p>
    <div class="mt-6">
      <NuxtLink to="/" class="btn">🔁 Nouvelle histoire</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const story = ref('')
const { data } = await useFetch('/api/generate-story', {
  method: 'POST',
  body: {
    character: route.query.character,
    place: route.query.place,
    object: route.query.object,
  },
})
story.value = data.value?.story || 'Erreur de génération.'
</script>
