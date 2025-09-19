<template>
  <div>
    <v-switch
      v-model="darkMode"
      :label="`Dark Mode: ${darkMode ? 'On' : 'Off'}`"
      color="primary"
      hide-details
      inset
    />
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
const darkMode = ref(false)
const theme = useTheme()

const toggleTheme = () => {
  toggleThemeVuetify(theme, darkMode.value)
}

onMounted(() => {
  darkMode.value = isDarkModeVuetify(theme)
})
watch(() => darkMode.value, () => {
  toggleTheme()
})

</script>

<style>

</style>