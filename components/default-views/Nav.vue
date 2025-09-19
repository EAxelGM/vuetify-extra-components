<template>
  <div>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="448" style="z-index: 2">
      <v-app-bar color="teal-darken-4">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(51, 81, 255,.8), rgba(33, 33, 33,.8)" />
        </template>

        <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{ "Vuetify Extra Components" }}</v-app-bar-title>
        <v-spacer />
        <MenuOptions />

      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer" permanent>
      <v-list density="compact" nav color="primary">
        <v-list-item v-for="(item, index) in itemsNavigate" :key="index" :to="item.to" :prepend-icon="item.icon">
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div v-if="envs.isDevelopment">
        <v-divider />
        <v-list density="compact" nav >
          <v-list-item v-for="(item, index) in $nav_developer_documentation" :key="index" target="_blank" :href="item.to" :color="item.color" :prepend-icon="item.icon">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import MenuOptions from './MenuOptions.vue';
const envs = useRuntimeConfig().public

const $store = useStore()
const drawer = ref(true);

const screenSize = ref({
  x: window?.innerWidth || 0,
  y: window?.innerHeight || 0,
});

const updateWidth = () => {
  screenSize.value.x = window.innerWidth;
  screenSize.value.y = window.innerHeight;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

const itemsNavigate = computed(() => {
  const navOficial = []
  for (const item of $nav_router) {
    if (item) {
      if (!item.permission) {
        navOficial.push(item)
        continue
      }
      if ($store.user?.permissions.includes(item.permission)) {
        navOficial.push(item)
        continue
      }
    }
  }
  return navOficial
})
</script>

<style>
.header_title {
  color: white;
  font-size: 70px;
}

.height_parallax {
  height: 250px;
  color: #000000;
}

@media (max-width: 1279px) {

  /* Cuando la pantalla sea menor a 768px */
  .header_title {
    font-size: 50px;
  }

  .height_parallax {
    height: 200px;
  }
}

@media (max-width: 719px) {

  /* Cuando la pantalla sea menor a 480px */
  .header_title {
    font-size: 40px;
  }

  .height_parallax {
    height: 150px;
  }
}
</style>