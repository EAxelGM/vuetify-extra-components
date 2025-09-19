<template>
  <!-- <v-app v-if="store"> -->
  <v-app>
    <header>
      <Nav />
    </header>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <footer>
      <v-container>
        <hr />
      </v-container>
      <Footer />
    </footer>
   <!--  <Alerts /> -->
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import Footer from '~/components/default-views/Footer.vue';
import Nav from '~/components/default-views/Nav.vue';
/* import { Alerts } from '~/components/'; */

const theme = useTheme()
onMounted(() => {
  isDarkModeVuetify(theme)
})
</script>