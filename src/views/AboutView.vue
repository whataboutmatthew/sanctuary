<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ item.title }}</h2>
    <p>{{ item.content }}</p>
    <ul>
      <li v-for="link in item.links" :key="link.id">
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
    <div>
      <button @click="editItem">Edit</button>
      <button @click="deleteItem">Delete</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editItem() {
      // Implement edit functionality
      // Open a modal or redirect to an edit page
    },
    deleteItem() {
      // Implement delete functionality
      // Prompt for confirmation and delete the Sanctuary item
    },
  },
};
</script>
