<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon color="white" v-bind="props">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
            :prepend-avatar="getGravatarUrl('axel-canelo@hotmail.com')"
            :title="'Axel Gonzalez'"
            :subtitle="'Thanks for use it'"
          >
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
          <v-list-item>
            <ToggleDarkMode />
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
import ToggleDarkMode from './ToggleDarkMode.vue'
const $store = useStore()

const menu = ref(false)

watch(() => $store?.user?._id, () => {
  menu.value = false
})

</script>

<style></style>