<template lang="">
    <section class = "flex flex-col gap-4 w-max">
        <div class = "flex gap-4">
            <div :class="!this.input ? '' : 'tooltip tooltip-open'" data-tip="hello">
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model.trim="input" />
            </div>
            <button class = "btn btn-info btn-outline" @click="search">search</button>
        </div>
        <button class = "btn btn-success btn-outline btn-sm w-1/4" @click="random">Random</button>
    </section>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    },
    methods: {
        search() {
            if (!this.input) {
                alert('Pleas input')
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