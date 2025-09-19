<template>
  <div>
    <v-card class="px-5">
      <v-data-table
        :items="items"
        :headers="newHeaders"
        :search="search"
        :loading="loading"
        :loading.color="loaderColor"
        :density="density"
        :items-per-page="itemsPerPage"
        :items-per-page-options="itemsPerPageOptions"
        :show-current-page="showCurrentPage"
        hover
      >
        <template v-slot:top>
          <v-row class="px-10 pt-5">
            <v-col cols="12" md="6">
              <v-scroll-y-transition hide-on-leave>
                <div v-show="isSearch">
                  <v-text-field
                    ref="input_search"
                    variant="underlined"
                    density="compact"
                    v-model="search"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    append-inner-icon="mdi-close"

                    @click:append-inner="isSearch = !isSearch"
                  />
                </div>
              </v-scroll-y-transition>
              <v-scroll-y-transition hide-on-leave>
                <div v-show="!isSearch">
                  <slot name="title" />
                </div>
              </v-scroll-y-transition>
            </v-col>
            <v-col cols="12" md="6">
              <div class="d-flex justify-end">
                <div>
                  <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        v-bind="props"
                        @click="isSearch = !isSearch"
                        icon
                        :color="isSearch ? 'primary' : ''"
                        variant="text"
                      >
                        <v-icon> mdi-magnify </v-icon>
                      </v-btn>
                    </template>
                    <span>Search</span>
                  </v-tooltip>
                </div>

                <!-- <div v-if="showDownloadExcel">
                  <v-btn icon="mdi-microsoft-excel" @click="downloadExcel()" variant="text" color="green" />
                </div> -->

                <div>
                  <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props: menuProps }">
                      <v-tooltip location="bottom">
                        <template v-slot:activator="{ props: tooltipProps }">
                          <v-btn icon v-bind="{ ...tooltipProps, ...menuProps }" variant="text" color="">
                            <v-icon>mdi-view-column</v-icon>
                          </v-btn>
                        </template>
                        <span>Ver Columnas</span>
                      </v-tooltip>
                    </template>
                    <v-card>
                      <v-list>
                        <v-list-item v-for="(item, index) in headers" :key="index">
                          <div v-if="item.title !== ''">
                            <v-checkbox color="primary" :modelValue="!item.isHidden"
                              @input="item.isHidden = !item.isHidden" :label="item.title" hide-details
                              density="compact" />
                          </div>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                </div>

                <div v-if="refreshItems">
                  <v-btn @click="refreshItems()" :loading="loading" :disabled="loading" icon variant="text" color="">
                    <v-icon>
                      mdi-refresh
                    </v-icon>
                    <v-tooltip activator="parent" location="bottom">Refresh</v-tooltip>
                  </v-btn>
                </div>
                <div>
                  <slot name="button_create" />
                </div>
              </div>
            </v-col>
          </v-row>
        </template>

        <template v-for="(slot, name) in $slots" v-slot:[name]="value">
          <slot :name="name" v-bind="value" />
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

  /* import xlsx from "json-as-xlsx"; */

  const { headers, items, tableName, showDownloadExcel, loading } = defineProps({
    headers: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    tableName: {
      type: String,
      default: null,
    },
    showDownloadExcel: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    density: {
      type: String,
      default: "comfortable",
      enum: ["default", "comfortable", "compact"],
    },
    itemsPerPageOptions: {
      type: Array,
      default: [
        { value: 5, title: "5" },
        { value: 10, title: "10" },
        { value: 25, title: "25" },
        { value: 50, title: "50" },
        { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
      ],
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    showCurrentPage: {
      type: Boolean,
      default: true,
    },
    density: {
      type: String,
      default: "compact",
    },
    refreshItems: {
      type: Function,
      default: null
    },
    loaderColor: {
      type: String,
      default: "primary"
    }
  });

  const isSearch = ref(false);
  const search = ref("");
  const input_search = ref(null);

  const newHeaders = computed(() => {
    return headers.filter((h) => !h.isHidden);
  });

  /* const downloadExcel = async () => {
    const columns = headers?.map((header) => ({
      label: header.title,
      value: header.key,
    }));

    const data = [
      {
        sheet: tableName || "Hoja 1",
        columns,
        content: items,
      },
    ];
    const settings = {
      fileName: `${new Date().toISOString()} ${tableName || ""}`,
    };
    await xlsx(data, settings);
  }; */

  //Watch
  watch(isSearch, () => {
    search.value = "";
    setTimeout(() => {
      input_search.value.focus();
    }, 100);
  });
</script>

<style lang="scss" scoped></style>