<template><div>
    <img class="banner" alt="banner" src="@/assets/banner.jpg">
    <div class="blog__list_elem center">
        <!-- <div class="qwe center"> -->
        
      <!-- </div> -->
        <div class=" blog__list">
            <ol style="list-style-type: none">

                <BlogItem v-for="item in blogs" :item-data="item" :key="item.id" class="blog__list__item"></BlogItem>
            </ol>
        </div>

        <div class="btns">
            <h1 class="">Tags</h1>
            <div class="tags__button">
                <button @click="sortTag = 'kitchen', filterBlogs(), toggleUse1()" class="tags__button_btn"
                    :class="{ btnActiv: toggle1 }">Kitchen</button>
                <button @click="sortTag = 'bathroom', filterBlogs(), toggleUse2()" class="tags__button_btn"
                    :class="{ btnActiv: toggle2 }">Bathroom</button>
            </div>
            <div class="tags__button">
                <button class="tags__button_btn">Building</button>
                <button class="tags__button_btn">Architecture</button>
            </div>
            <div class="tags__button">
                <button class="tags__button_btn">Kitchen Planning</button><button class="tags__button_btn">Bedroom</button>
            </div>

        </div>
    </div>
    </div>
</template>

<script>

import BlogItem from '@/components/BlogItem.vue';
export default {
    name: 'BlogList',
    components: {
        BlogItem,
    },

    data() {
        return {
            sortTag: "",
            reserve: [],
            toggle1: false,
            toggle2: false,
        };
    },
    computed: {
        blogs() {
            return this.$store.state.blogs
        },
        getKit() {
            return this.$store.getters.getKit
        }
    },

    methods: {
        toggleUse1() {

            if (!this.toggle1) {
                this.toggle1 = !this.toggle1;
                this.toggle2 = !this.toggle1;
            } else {

                this.toggle2 = !this.toggle1;
            }

        },
        toggleUse2() {

            if (!this.toggle2) {
                this.toggle2 = !this.toggle2;
                this.toggle1 = !this.toggle2;
            } else {

                this.toggle1 = !this.toggle2;
            }
        },


        filterBlogs() {
            if (this.reserve.length == 0) {
                this.reserve = this.$store.state.blogs;
                switch (this.sortTag) {
                    case "kitchen":
                        this.$store.state.blogs = this.blogs.filter(item => item.tag === this.sortTag);
                        break;
                    case "bathroom":
                        this.$store.state.blogs = this.blogs.filter(item => item.tag === this.sortTag);

                }
            } else {
                this.$store.state.blogs = this.reserve;

                switch (this.sortTag) {
                    case "kitchen":
                        this.$store.state.blogs = this.blogs.filter(item => item.tag === this.sortTag);
                        break;
                    case "bathroom":
                        this.$store.state.blogs = this.blogs.filter(item => item.tag === this.sortTag);
                }
            }
        }

    },
};
</script>

<style lang="scss" scoped>
.blog__list_elem {

    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}
.banner{
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(50% - 900px);
    margin-right: calc(50% - 900px);
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 50px;
}
// .qwe {
    
//     // width: 2400px;
//     display: flex;
//     padding-left: calc(50% - 1200px);
//     padding-right: calc(50% - 1200px);
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: space-around;

// }
.general {
    max-width: 1300px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}
.component__none {
    display: none;
}

.tags {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 298px;
    gap: 12px;

    &__button {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        gap: 10px;

        &_btn {
            display: flex;
            padding: 9px 30px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            background: #F4F0EC;

        }

        &_btn:active {
            background: #292F36;
            color: #F4F0EC;
        }
    }
}

.btnActiv {
    display: flex;
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #F4F0EC;
    background: #292F36;
    color: #F4F0EC;
}

.blog__list {

    display: flex;
    width: 802px;

    &__item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        margin-bottom: 100px;

        &_title {
            display: flex;
            color: $DM_Serif_Display_color;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        &_info {
            margin-top: 46px;
            display: flex;
            flex-direction: row;
            margin-bottom: 46px;

            &_right {
                margin-left: 410px;
            }
        }

        &_description {
            display: flex;
            color: $jost;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;

        }
    }

}
</style>


