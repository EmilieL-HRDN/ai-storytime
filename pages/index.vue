<template>
  <div
    class="max-w-xl mx-auto p-6 text-center bg-white h-150 rounded-2xl flex flex-col justify-center items-center"
  >
    <h1 class="text-3xl font-bold mb-6">🌟 Mon Histoire Magique 🌟</h1>
    <p class="text-lg mb-4">
      Créez votre propre histoire magique en remplissant le formulaire
      ci-dessous. Choisissez un personnage, un lieu et le genre du héro.
    </p>
    <UForm
      :schema="schema"
      :state="state"
      :validate="validate"
      class="space-y-4"
      @submit.prevent="submit"
    >
      <UFormField label="Nom du personnage" name="character">
        <UInput
          :validate-on-blur="false"
          v-model="state.character"
          placeholder="Nom du personnage"
          class="input mb-4 w-48"
        />
      </UFormField>
      <UFormField label="Lieu" name="place">
        <UInput
          v-model="state.place"
          placeholder="Lieu"
          class="input mb-4 w-48"
        />
      </UFormField>
      <UFormField label="Genre" name="gender">
        <USelect
          v-model="state.gender"
          :items="['fille', 'garçon', 'non-binaire']"
          placeholder="Sélectionnez un genre"
          class="w-48"
        />
      </UFormField>

      <UButton
        type="submit"
        icon="i-lucide-rocket"
        class="mt-5 w-48 text-center hover:bg-amber-400 hover:text-primary-100"
        size="xl"
        >Créer mon histoire</UButton
      >
    </UForm>
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  character: z.string().min(2, "Le nom du personnage est requis"),
  place: z.string().min(1, "Le nom du lieu est requis"),
  gender: z.enum(["fille", "garçon", "non-binaire"], {
    errorMap: () => ({ message: "Sélectionnez un genre" }),
  }),
});
type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  character: undefined,
  place: undefined,
  gender: undefined,
});
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.character) {
    errors.push({
      name: "character",
      message: "Le nom du personnage est requis",
    });
  }
  if (!state.place) {
    errors.push({ name: "place", message: "Le nom du lieu est requis" });
  }
  if (!state.gender) {
    errors.push({ name: "gender", message: "Sélectionnez un genre" });
  }
  return errors;
};

const router = useRouter();

function submit(event: FormSubmitEvent<typeof state>) {
  router.push({
    path: "/story",
    query: {
      character: event.data.character,
      place: event.data.place,
      gender: event.data.place,
    },
  });
}
</script>
