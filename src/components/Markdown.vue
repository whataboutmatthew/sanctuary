<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue3-markdown :source="markdown" />
  </div>
</template>

<script>
import vue3Markdown from 'vue3-markdown'
export default {
  name: 'Markdown',
  components: {
    vue3Markdown
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      markdown: `
# This is a markdown string

- You can use **bold** and _italic_ text
- You can use [links](https://vuejs.org/)
- You can use \`code\` blocks
      `
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>