<template>
    <div class="cat__card">
        <img class=" cat__card_img" :src=itemData.url alt="none img">
        <div class="cat__card_discription">
            <div class="cat__card_discription_text">
                <h1 class="cat__card_discription_text_title">{{ itemData.cardText }} </h1>
                <h2 class="cat__card_discription_text_info">Decor / Artchitecture</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: ["itemData"],

    data() {
        return {

        };
    },


    methods: {

    },
};
</script>

<style lang="scss" scoped>
.cat__card {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
}
.cat__card_discription{
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cat__card_discription_text_info{
    color: #4D5053;
font-family: Jost;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 33px */
letter-spacing: 0.22px;
}
.cat__card_discription_text_title{
    color: #292F36;
font-family: DM Serif Display;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 125%; /* 31.25px */
letter-spacing: 0.5px;
}
</style>