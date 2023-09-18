<template>
    <div>
        <div class="general">
            <div class="banner center">
                <img class="banner__photo" src="@/assets/banner_pd.png" alt="banner">
            </div>
            <div class="slider" :style="{ 'margin-left': '-' + (96.2 * (currentSlideIndex)) + '%' }">
                <SliderComp  v-for="item in slider_data" :key="item.id" :item-data="item" />
            </div>
        </div>
        <div class="button-block">
            <button @click="prevSlide"></button>
            <button @click="nextSlide"></button>
        </div>
    </div>
</template>

<script>


import SliderComp from '@/components/SliderComp.vue';

export default {
    name: 'FinalTaskPDComp',
    components: {
        SliderComp,
    },

    data() {
        return {
            currentSlideIndex: 0
        };
    },
computed:{
    slider_data() {
            return this.$store.state.sliderData
        },

},

methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
            this.currentSlideIndex--
            } else
            this.currentSlideIndex++
        },
        nextSlide() {
            if(this.currentSlideIndex >= this.slider_data.length - 1) {
                this.currentSlideIndex = 0
            } else
            this.currentSlideIndex++
        }
    },
};
</script>

<style lang="scss" scoped>
.general {
    max-width: 1300px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}
.slider {
    margin-top: 100px;
    display: flex;
    transition: all ease .3s;
}

.zoom {

    margin-left: 50px;
}
.zoom:hover {
    scale: 1.05;
}
.button-block {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
}
button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
button:active {
    background-color: black;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75) inset;
}</style>