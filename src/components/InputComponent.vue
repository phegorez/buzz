<template lang="">
    <section class = "flex flex-col gap-4 w-max">
        <div class = "flex gap-4">
            <div :class="!this.input ? '' : 'tooltip tooltip-open'" data-tip="hello">
                <input type="text" placeholder="Drink Name" class="input input-bordered w-full max-w-xs" v-model.trim="input" />
            </div>
            <button class = "btn btn-info btn-outline" @click="search">search</button>
        </div>
        <button class = "btn btn-success btn-outline btn-sm w-1/4" @click="random">Random</button>
        <dialog id="AleartModal" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Oh oh!</h3>
                <p class="py-4" v-if="this.input == '' ">Press Enter Input</p>
                <p class="py-4" v-else-if="notFound">Not Found {{this.input}}</p>
            </div>
            <form method="dialog" class="modal-backdrop">
            <button>close</button>
            </form>
        </dialog>
    </section>
</template>
<script>
export default {
    props : [
        'notFound'
    ],
    data() {
        return {
            input: ''
        }
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