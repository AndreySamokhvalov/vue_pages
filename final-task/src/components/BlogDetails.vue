<template>
    <div class="component">
        <div class="quotes">
            <div class="quotes__data">
                <h1 class="quotes__data_logo">“</h1>
                <h1 class="quotes__data_text">The details are not the details.</h1>
                <h1 class="quotes__data_text">They make the design.</h1>
            </div>
        </div>

        <div class="blog-details" v-for="item in details" :key="item.id">
            <div v-if="item.id === itemData.id">
                <h1 class="blog-details__title">{{ item.name }}</h1>
                <p class="blog-details__text"> {{ item.text }}</p>
                <ol class="blog-details__itemList">
                    <li class="blog-details__itemList_item">{{ item.list.listItem1 }}</li>
                    <li class="blog-details__itemList_item">{{ item.list.listItem2 }}</li>
                    <li class="blog-details__itemList_item">{{ item.list.listItem3 }}</li>
                </ol>
                <img class="details__img" :src=item.url >
                <p class="blog-details__text"> {{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogDetails',

    props: ["itemData"],

    data() {
        return {
           
        };
    },

    computed: {
      details() {
            return this.$store.state.details
        },
    },


    methods: {

    },
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  .btns {
    display: flex;
    flex-direction: column;
    margin-left: 110px;
  }

}


.component__none {
  display: none;
}



.quotes {
  margin-top: 36px;
  display: flex;
  width: 800px;
  height: 268px;
  border-radius: 50px;
  background: #F4F0EC;

  &__data {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    // gap: 20px;

    &_logo {
      display: flex;
      width: 100px;
      height: 100px;
      color: #CDA274;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 200px;
      font-style: italic;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 4px;
      padding-right: 264px;
      padding-bottom: 40px;
      transform: rotate(180deg);
    }

    &_text {
      color: #CDA274;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: italic;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      padding-left: 228px;
    }
  }
}

.blog-details {
  display: flex;
  flex-direction: column;

  &__title {
    margin-top: 58px;
    display: flex;
    color: $DM_Serif_Display_color;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    margin-top: 20px;
    width: 800px;
    color: $jost;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__itemList {
    margin-top: 24px;
    gap: 32px;
    width: 734px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-start;

    &_item {
      margin-left: 26px;
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
.details__img{
  margin-top: 44px;
}



</style>

