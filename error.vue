<template>
  <NuxtLayout>
    <div align="center">
      <v-img max-width="400px" :src="urlImage" style="padding: 10px 0px;" />
      <h1 style="font-size: 50px;">{{ messageError }}</h1>
      <h2 style="font-size: 35px;">
        {{ error.statusCode }}
      </h2>
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <div class="d-flex justify-center" style="gap: 10px">
        <v-btn to="/">
          Go Home
        </v-btn>
        <v-btn @click="$router.back()">
          Go Back
        </v-btn>
      </div>
      <!-- {{ error }} -->
    </div>
  </NuxtLayout>
</template>

<script setup>
const urlImage = ref("https://fpalpha.com/wp-content/themes/fpalpha2k22/assets/images/fpalpha.svg")
const messageError = ref("Oops... Something is wrong 😞")
const error = useError();
const $router = useRouter()

onMounted(() => {
  if(error.value.statusCode === 404){
    messageError.value = "Page Not Found"
  }
})

</script>