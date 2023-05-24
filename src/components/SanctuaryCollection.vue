<template>
    <div>
        <h1>Sanctuary</h1>
        <router-link to="/create">Create New</router-link>
        <router-view></router-view>
        <sanctuary-item v-for="item in sanctuaryItems"
                        :key="item.id"
                        :item="item"></sanctuary-item>
    </div>
</template>

<script>
    import SanctuaryItem from './SanctuaryItem.vue';

    export default {
        components: {
            SanctuaryItem,
        },
        data() {
            return {
                sanctuaryItems: [], // Array to store the Sanctuary items
            };
        },
        methods: {
            handleCreate(newItem) {
                // Save the newly created Sanctuary item
                this.sanctuaryItems.push(newItem);
            },
        },
    };
</script>
