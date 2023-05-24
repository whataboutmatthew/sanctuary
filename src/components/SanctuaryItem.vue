<template>
    <div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
        <ul>
            <li v-for="link in item.links" :key="link.id">
                <router-link :to="link.url">{{ link.title }}</router-link>
            </li>
        </ul>
        <div>
            <router-link :to="`/edit/${item.id}`">Edit</router-link>
            <button @click="deleteItem">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
        methods: {
            deleteItem() {
                // Implement delete functionality
                // Prompt for confirmation and delete the Sanctuary item
            },
        },
    };
</script>
