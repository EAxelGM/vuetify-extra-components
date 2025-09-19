
<template>
  <div>
    <Table :headers="headers" :items="items">
      <template v-slot:[`item.actions`]="{ item }">
        <div>
          Hello {{ item.name }}, you can add anything here
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
  import {Table} from "@/components/"

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
      _id: 1, name: "Axel", lastName: "Gonzalez", email: "axel@example.com", color:"#442243"
    }
  ])
</script>