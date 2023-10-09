<template lang="">
    <section class = "flex flex-col gap-4 w-max">
        <div class = "flex gap-4">
            <input type="text" placeholder="Drink Name" ref="inputDrinks" class="input input-bordered w-full max-w-xs" v-model.trim="input" />
            <button class = "btn btn-info btn-outline" @click="search">search</button>
        </div>
        <button class = "btn btn-success btn-outline btn-sm w-1/4" @click="random">Random</button>
        <dialog id="AleartModal" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Oh oh!</h3>
                <p class="py-4" v-if="this.input == ''">Press Enter Drink name</p>
            </div>
            <form method="dialog" class="modal-backdrop">
            <button>close</button>
            </form>
        </dialog>
    </section>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    },
    mounted() {
        // Use a setTimeout to ensure that the DOM is fully rendered
        this.$nextTick(() => {
            const inputDrinks = this.$refs.inputDrinks;
            if (inputDrinks) {
                inputDrinks.focus();
            } else {
                console.error('Input element not found.');
            }
        });
    },
    methods: {
        search() {
            if (!this.input || this.notFound) {
                const AleartModal = document.getElementById('AleartModal')
                AleartModal.showModal()
            }
            else {
                this.$emit('formInput', this.input)
                this.input = ''
            }
        },
        random() {
            this.$emit('random')
        }
    }
}
</script>