<template>
    <div class="dropdown">
        <input type="text" placeholder="Search for Drinks" class="input input-bordered" v-model="search"
            @click.stop="openList">
        <ul v-if="isOpen || search" tabindex="0"
            class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box overflow-auto w-60 max-h-[200px]">
            <li v-for="result in searchResults" :key="result" @click.stop="setSelected(result)"
                class="border-b pb-1 cursor-pointer hover:font-bold">
                {{ searchResults ? result : 'Not Found' }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    source: {
        type: Array,
        required: true,
        default: () => []
    }
});

const emit = defineEmits(['selected', 'searchCockTails']);

const search = ref('');
const isOpen = ref(false);

const openList = () => {
    isOpen.value = true;
};

const searchResults = computed(() => {
    return props.source.filter((item) => {
        return item.toLowerCase().startsWith(search.value.toLowerCase());
    });
});

const setSelected = item => {
    isOpen.value = false; // Hide the <ul> when an item is selected
    search.value = ''; // Clear the search input
    emit('selected', item);
    emit('searchCockTails');// Update the list height when an item is selected
};

</script>