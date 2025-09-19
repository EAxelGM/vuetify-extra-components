
<template>
  <div>
    <Table :headers="headers" :items="items">
      <template v-slot:title>
        <h2>A TITLE HERE</h2>
      </template>
      <template v-slot:button_create>
        <div>
          <v-btn icon variant="text" @click="console.log('hello world')">
            <v-icon>
              mdi-plus
            </v-icon>
            <v-tooltip activator="parent" location="bottom">Button icon to make an action</v-tooltip>
          </v-btn>
        </div>
      </template>
      <template v-slot:[`item.color`]="{ item }">
        <v-chip :color="item.color">
          {{item.color}}
        </v-chip>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div>
          Hello {{ item.name }}, you can add anything here
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
  import { Table } from "@/components"

  const headers = ref([
    { title: '_id', key: '_id', isHidden: true },
    { title: 'Name', key: 'name' },
    { title: 'LastName', key: 'lastName' },
    { title: 'Email', key: 'email' },
    { title: 'Color', key: 'color' },
    { title: 'Actions', key: 'actions', sortable: false },
  ])

  const items = ref([
    {
      _id: 1, name: "Axel", lastName: "Gonzalez", email: "axel@example.com", color:"#ff0000"
    },
    {
      _id: 2, name: "Karla", lastName: "Lopez", email: "karla@example.com", color:"#ff00ff"
    }
  ])
</script>