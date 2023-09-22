<template>
  <div class="header center">
    <div class="header__left">
      <div class="header__left_logo">
        <router-link to="/homepage" class="header__right_link banner__intro_text"><svg class="logo" width="34" height="34" viewBox="0 0 34 34" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274" />
          </svg></router-link>
      </div>


      <div class="header__left_text">Interno</div>
    </div>
    <div class="header__right">
      <router-link to="/homepage" class="header__right_link">Home</router-link>
      <router-link to="/projectdetailspage" class="header__right_link">Project</router-link>
      <router-link to="/projectpage" class="header__right_link">Project Details</router-link>
      <router-link to="/blogdetailspage" class="header__right_link">Blog</router-link>
      <router-link to="/blogpage" class="header__right_link">Blog Details</router-link>
      
      
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HeaderComp',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
  created() {
    this.$router.push({ name: "homepage" })
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 1200px;
  margin-top: 54px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  align-items: center;

  &__left {
    display: flex;
    flex-direction: row;
    align-items: center;

    &_text {
      color: $DM_Serif_Display_color;
      font-family: DM Serif Display;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      margin-left: 10px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    &_link {
      color: $jost;
      margin-left: 50px;
      text-align: center;
      font-family: Jost;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;

    }
  }
}
</style>