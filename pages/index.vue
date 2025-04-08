<template>
  <div class="max-w-xl mx-auto p-6 text-center">
    <h1 class="text-3xl font-bold mb-6">🌟 Mon Histoire Magique</h1>
    <form @submit.prevent="submit">
      <input
        v-model="character"
        placeholder="Nom du personnage"
        class="input mb-4"
      />
      <input v-model="place" placeholder="Lieu magique" class="input mb-4" />
      <input
        v-model="object"
        placeholder="Objet fantastique"
        class="input mb-6"
      />
      <button type="submit" class="btn">Créer mon histoire</button>
    </form>
  </div>
</template>

<script setup>
const router = useRouter();
const character = ref("");
const place = ref("");
const object = ref("");

const submit = () => {
  router.push({
    path: "/story",
    query: {
      character: character.value,
      place: place.value,
      object: object.value,
    },
  });
};
</script>
