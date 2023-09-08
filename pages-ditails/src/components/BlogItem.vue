<template>
  <div @click="show()"  >
    <h1 class=" blog__list__item_title ">{{ itemData.blogName }}</h1>
    <img class=" blog__list__item_img" :src=itemData.url alt="none img">
    <div class=" blog__list__item_info">
      <h3 class=" blog__list__item_info_left inf">{{ itemData.blogInfo }}</h3>
      <h3 class=" blog__list__item_info_right inf">Interior / Home / Decore</h3>
    </div>
    <h2 class="blog__list__item_description">{{ itemData.blogText }}</h2>

    <BlogDetails v-show="visible" :item-data="itemData"></BlogDetails>
  </div>
</template>

<script>
import BlogDetails from '@/components/BlogDetails.vue';
export default {
  name: 'BlogItem',
  components: {
    BlogDetails,
  },
  props: ["itemData"],
  data() {
    return {
      visible: false,
    }
  },

  methods: {
    show() {
      this.visible = !this.visible;
    }

  },
};
</script>

<style lang="scss" scoped>


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

.inf {

  display: flex;
  color: $jost;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}


</style>


