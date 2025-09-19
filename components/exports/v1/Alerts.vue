<template>
  <div>
    <v-snackbar
      v-model="snackbarExec"
      :timeout="$store?.alertData?.timeout"
      :color="$store?.alertData?.color"
      :rounded="$store?.alertData?.rounded"
      class="pb-10"
    >
      {{ $store?.alertData?.message }}

      <template v-slot:actions v-if="$store?.alertData?.showButtonClose">
        <v-btn
          :color="$store?.alertData?.buttonCloseColor"
          @click="snackbarExec = false"
          :icon="!$store?.alertData?.buttonCloseText"
        >
          <template v-if="$store?.alertData?.buttonCloseText">
            {{$store?.alertData?.buttonCloseText}}
          </template>
          <template v-else>
            <v-icon>{{$store?.alertData?.buttonCloseIcon}}</v-icon>
          </template>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
const snackbarExec = ref(false)
const $store = useStore()

// Watch para disparar el alert cuando cambia el mensaje
watch(
  () => $store.alertData.id,
  () => {
    if ($store.alertData.message) {
      snackbarExec.value = true
    }
  }
)
</script>
