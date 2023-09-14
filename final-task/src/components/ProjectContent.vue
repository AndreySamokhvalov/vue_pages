<template>
    <div class="project">
        <div class="qwe ">
            <img class="banner" alt="banner" src="@/assets/banner.jpg">
            <div class="heading__in center">
                <h1 class="heading__in_title">Our Project</h1>
                <div class="brscrmbs">
                    <h2 class="banner__intro_text">Home / Blog</h2>
                </div>
            </div>
        </div>
        <div class="categories">
            <div class="cat_btns ">
                <button v-on:click="sortTag = 'bedroom', filt()" class="cat_btn">Badroom</button>
                <button v-on:click="sortTag = 'kitchen', filt()" class="cat_btn">Kitchen</button>
                <button v-on:click="sortTag = 'bathroom', filt()" class="cat_btn">Bathroom</button>
                <button v-on:click="sortTag = '', filt()" class="cat_btn">Not filter</button>
            </div>
            <div class="card__comp ">
                <CardComp v-for="item in reserve" :item-data="item" :key="item.id"></CardComp>
            </div>
        </div>

    </div>
</template>

<script>
import CardComp from './CardComp.vue';
export default {
    name: 'ProjectBanner',
    components: {
        CardComp,
    },


    data() {
        return {
            sortTag: "",
            reserve: [],
        };
    },
    created() {
        this.reserve = this.getData();
    },


    methods: {
        getData() {
            return [
                {
                    id: "1", tag: "bedroom", url: "./img/main/minimal.png", cardText: "Minimal bedroom"
                },
                {
                    id: "2", tag: "kitchen", url: "./img/main/minimal1.png", cardText: "Minimal kitchen"
                },
                {
                    id: "3", tag: "kitchen", url: "./img/main/minimal2.png", cardText: "Minimal kitchen"
                },
                {
                    id: "4", tag: "bathroom", url: "./img/main/minimal4.png", cardText: "Minimal bathroom"
                }
            ]
        },
        filt() {
            console.log(this.reserve);
            this.reserve = this.getData();
            switch (this.sortTag) {
                case "kitchen":
                    this.reserve = this.reserve.filter(item => item.tag === this.sortTag);
                    break;
                case "bathroom":
                    this.reserve = this.reserve.filter(item => item.tag === this.sortTag);
                    break;
                case "bedroom":
                    this.reserve = this.reserve.filter(item => item.tag === this.sortTag);
                    break;
                case "":
                    this.reserve = this.getData();
            }

        },

    }
}
</script>

<style lang="scss" scoped>
.project {
    display: flex;
    padding-left: calc(50% - 1200px);
    flex-direction: column;
    padding-right: calc(50% - 1200px);

}

.qwe {
    width: 2400px;
    display: flex;
    padding-left: calc(50% - 1200px);
    padding-right: calc(50% - 1200px);
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

}

.banner {
    position: relative;
    display: flex;
    margin-bottom: 100px;

}

.cat_btns {
    margin-left: 920px;
    display: flex;
    padding-left: calc(50% - 1200px);
    padding-right: calc(50% - 1200px);

}

.cat_btn {
    width: 132px;
    height: 52px;
    border-radius: 18px;
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    border-color: #fff;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.cat_btn:active {

    background-color: #CDA274;
    border-color: #CDA274;
    ;

}

.card__comp {
    margin-top: 60px;
    width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);

}

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.heading__in {
    margin-top: 193px;
    position: absolute;
    display: flex;
    width: 503px;
    padding: 41px 0px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &_title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
    }

    .banner__intro_text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }
}
</style>