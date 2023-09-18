<template>
    <div class="slider-item">
        <div class="detalies">
            <h1 class="slider-item_title center">{{ itemData.title }}</h1>
            <p class="slider-item_text first center">{{ itemData.text1 }}</p>
            <p class="slider-item_text second center">{{ itemData.text2 }}</p>
        </div>
        <img class="zoom" :src=itemData.url alt="none img">
    </div>
</template>

<script>
export default {
    name: 'SliderComp',
    props: ['itemData'],


    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.slider-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.details {
    display: flex;
    width: 658px;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
}

.slider-item_title {
    margin-top: 100px;
    width: 658px;
    display: flex;
    margin-left: 50px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    align-content: stretch;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.slider-item_text {
    display: flex;
    width: 658px;
    margin-left: 50px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}
.first{
    margin-top: 25px;
}
.second{
    margin-top: 30px;
    margin-bottom: 100px;
}

.zoom {

    margin-left: 50px;
}

.zoom:hover {
    scale: 1.05;
}
</style>