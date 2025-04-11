<template>
  <UApp>
    <div
      :style="backgroundStyles"
      class="flex flex-col justify-center items-center"
    >
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
<script setup>
import { formats } from "openai/internal/qs/index.mjs";

const img = useImage();

const backgroundStyles = computed((à) => {
  const imgUrl = img("stary_night.jpg");
  return {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    format: "web",
  };
});
</script>
