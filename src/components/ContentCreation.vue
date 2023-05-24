<template>
  <div>
    <!-- Content creation form elements -->
    <input type="text" v-model="title" placeholder="Title" />
    <textarea v-model="content" placeholder="Content"></textarea>
    <button @click="addLink">Add Link</button>
    <div v-for="(link, index) in links" :key="index">
      <input type="text" v-model="link.title" placeholder="Link Title" />
      <input type="text" v-model="link.url" placeholder="Link URL" />
      <button @click="removeLink(index)">Remove</button>
    </div>
    <button @click="createContent">Create</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      links: [],
    };
  },
  methods: {
    addLink() {
      this.links.push({ title: '', url: '' });
    },
    removeLink(index) {
      this.links.splice(index, 1);
    },
    createContent() {
      const newItem = {
        title: this.title,
        content: this.content,
        links: [...this.links],
      };
      this.$emit('createContent', newItem);
      // Reset form values
      this.title = '';
      this.content = '';
      this.links = [];
    },
  },
};
</script>
