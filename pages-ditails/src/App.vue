<template>
  <div id="app">
    <LinesComp />

    <div class="content">
      <HeaderComp />
      <div class="qwe">
        <img class="banner" alt="banner" src="@/assets/banner.jpg">
      </div>
      <BlogList />

      <FooterComp />
    </div>
  </div>
</template>

<script>

import BlogList from './components/BlogList.vue';
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import LinesComp from './components/LinesComp.vue';


export default {
  name: 'App',
  components: {
    BlogList,
    HeaderComp,
    FooterComp,
    LinesComp

  }
}
</script>

<style>
.content {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
}

.qwe {
  width: 2400px;
  display: flex;
  padding-left: calc(50% - 1920px / 2);
  padding-right: calc(50% - 1920px / 2);

}


.banner {
  display: flex;
  margin-bottom: 100px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

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
</style>
