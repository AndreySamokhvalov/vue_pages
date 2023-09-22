<template>
    <div id="app" class="main">
        <div class="banner center">
            <img class="banner__photo" src="@/assets/banner_blog.jpg" alt="banner">

            <div class="banner__intro center">
                <div class="heading__intro_block">
                    <div class="banner__intro_title_arr" v-for="heading in headings" :key="heading.id">
                        <h1 class="banner__intro_title">{{ heading }}</h1>
                    </div>
                </div>




                <div class="brscrmbs">
                    <h2 class="banner__intro_text"><router-link to="/homepage" class="header__right_link banner__intro_text">Home</router-link> / <router-link to="/blogdetailspage" class="header__right_link banner__intro_text">Blog</router-link></h2>
                </div>
            </div>
        </div>



        <div class="latest__post center">
            <h1 class="latest__post_title">Latest Post</h1>
            <div class="latest__post__card">
                <img class="lastest__post__card_photo" src="@/assets/lastest_post1.png" alt="latest_post">
                <div class="lastest__post__info">
                    <h2 class="lastest__post__info_title">Low Cost Latest Invented Interior Designing Ideas</h2>
                    <h3 class="lastest__post__info_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                        dignissim maximus.posuere in.Contrary to popular belief.</h3>
                    <h3 class="lastest__post__info_text">Lorem Ipsum is not simply random text. It has roots in a piece of
                        classica.</h3>
                    <div class="lastest__post__info_info">
                        <h3 class="lastest__post__info_info_text">26 December,2022 </h3>
                        <svg class="lastest__post__info_info_inarrow" width="52" height="53" viewBox="0 0 52 53" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="news center">
            <div class="articles__News">
                <div class="banner__intro_title_arr center" v-for="heading in headings" :key="heading.id">
                    <h1 class="banner__intro_title">{{ heading }}</h1>
                </div>
            </div>



            <div class="blog center">
                <div class="blog__card">
                    <div class="blog__card_border">
                        <div class="blog__card__content">
                            <div class="blog__card__content__design">
                                <img class="blog__card__content__desing_photo" src="@/assets/blog_card11.jpg" alt="img">
                                <div class="blog__card__content__design_text">
                                    <h3 class="blog__card__content__design_text_name">Kitchan Design</h3>
                                </div>

                            </div>
                            <h2 class="blog__card__content_text">Let’s Get Solution For Building Construction Work</h2>
                            <div class="blog__info">
                                <h3 class="blog__card__content_info">26 December,2022 </h3>
                                <svg class="blog__card__content_info_arrow" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="blog__card">
                    <div class="blog__card_border central__card">
                        <div class="blog__card__content central__card">
                            <div class="blog__card__content__design">
                                <img class="blog__card__content__desing_photo central__card" src="@/assets/blog_card12.png"
                                    alt="img">
                                <div class="blog__card__content__design_text">
                                    <h3 class="blog__card__content__design_text_name">Kitchan Design</h3>
                                </div>

                            </div>
                            <h2 class="blog__card__content_text central__card">Let’s Get Solution For Building Construction
                                Work</h2>
                            <div class="blog__info">
                                <h3 class="blog__card__content_info">26 December,2022 </h3>
                                <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="white" />
                                    <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                        </div>

                    </div>
                </div>
                <div class="blog__card">
                    <div class="blog__card_border">
                        <div class="blog__card__content">
                            <div class="blog__card__content__design">
                                <img class="blog__card__content__desing_photo" src="@/assets/blog_card13.jpg" alt="img">
                                <div class="blog__card__content__design_text">
                                    <h3 class="blog__card__content__design_text_name">Kitchan Design</h3>
                                </div>

                            </div>
                            <h2 class="blog__card__content_text">Let’s Get Solution For Building Construction Work</h2>
                            <div class="blog__info">
                                <h3 class="blog__card__content_info">26 December,2022 </h3>
                                <svg class="blog__card__content_info_arrow" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="blog__card">
                    <div class="blog__card_border">
                        <div class="blog__card__content">
                            <div class="blog__card__content__design">
                                <img class="blog__card__content__desing_photo" src="@/assets/blog_card14.png" alt="img">
                                <div class="blog__card__content__design_text">
                                    <h3 class="blog__card__content__design_text_name">Kitchan Design</h3>
                                </div>

                            </div>
                            <h2 class="blog__card__content_text">Let’s Get Solution For Building Construction Work</h2>
                            <div class="blog__info">
                                <h3 class="blog__card__content_info">26 December,2022 </h3>
                                <svg class="blog__card__content_info_arrow" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="blog__card">
                    <div class="blog__card_border central__card">
                        <div class="blog__card__content central__card">
                            <div class="blog__card__content__design">
                                <img class="blog__card__content__desing_photo central__card" src="@/assets/blog_card15.png"
                                    alt="img">
                                <div class="blog__card__content__design_text">
                                    <h3 class="blog__card__content__design_text_name">Kitchan Design</h3>
                                </div>

                            </div>
                            <h2 class="blog__card__content_text central__card">Let’s Get Solution For Building Construction
                                Work</h2>
                            <div class="blog__info">
                                <h3 class="blog__card__content_info">26 December,2022 </h3>
                                <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="white" />
                                    <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                        </div>

                    </div>
                </div>
                <div class="blog__card">
                    <div class="blog__card_border">
                        <div class="blog__card__content">
                            <div class="blog__card__content__design">
                                <img class="blog__card__content__desing_photo" src="@/assets/blog_card16.png" alt="img">
                                <div class="blog__card__content__design_text">
                                    <h3 class="blog__card__content__design_text_name">Kitchan Design</h3>
                                </div>

                            </div>
                            <h2 class="blog__card__content_text">Let’s Get Solution For Building Construction Work</h2>
                            <div class="blog__info">
                                <h3 class="blog__card__content_info">26 December,2022 </h3>
                                <svg class="blog__card__content_info_arrow" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9526L29.7143 26.2669L23.7714 19.5812" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <img class="pagination center" src="@/assets/pagination.png" alt="img">
        </div>


    </div>
</template>

<script>

export default {
    name: 'CompBlog',

    data() {
        return {
            headings: ["Articles", "&", "News"],
            rar: ["Articles", "&", "News"],

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.banner__intro_title_arr{
  display: flex;
}
.banner {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  &__photo {
    display: flex;
    position: relative;
  }
  &__intro {
    margin-top: 185px;
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
      color: $DM_Serif_Display_color;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
    &_text {
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

.latest__post {
  margin-top: 200px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  &_title {
    color: $DM_Serif_Display_color;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__card {
    display: flex;
    width: 1155px;
    padding: 22px;
    flex-direction: row;
    justify-content: flex-start;
    gap: 66px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  }
}
.lastest__post__card_photo {
  width: 570px;
  height: 478px;
}
.lastest__post__info {
  display: flex;
  width: 470px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  &_title {
    color: $DM_Serif_Display_color;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
  }
  &_text {
    color: $jost;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
.lastest__post__info_info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &_text {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}
.news {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &__title {
    color: $DM_Serif_Display_color;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
}
.blog {
//   gap: 21px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &__info {
    display: flex;
    width: 340px;
    align-items: center;
    gap: 65px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog__card__content_info {
      color: $jost;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
  &__card {
    display: flex;

    &_border {
      position: relative;
      display: flex;
      padding: 21px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 62px;
      border: 1px solid #e7e7e7;
      box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    }
    &__content {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;

      &_text {
        margin-top: 26px;
        margin-bottom: 30px;
        background-color: #ffffff;
        display: flex;
        width: 270px;
        height: 70px;
        flex-direction: column;
        justify-content: center;

        color: $DM_Serif_Display_color;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
      }

      &__design {
        display: flex;
        &_text {
          margin-top: 228px;
          margin-left: 20px;
          position: absolute;
          width: 124px;
          height: 41px;
          border-radius: 8px 8px 8px 0px;
          background: #ffffff;
          &_name {
            margin-top: 10px;
            display: flex;
            justify-content: center;
            color: $jost;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
            letter-spacing: 0.16px;
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
.blog__card{
    margin-bottom: 20px;
}
.pagination {
  margin-top: 50px;
  width: 268px;
  display: flex;
  margin-left: 470px;
  margin-bottom: 214px;
}





.contact {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  width: 260px;
  &__address {
    display: flex;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    width: 258px;
  }
}

.lines {
  fill: #292f36;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  gap: 399px;
}
.main {
  display: flex;
  position: relative;
  flex-direction: column;
}
.heading__intro_block{
  display: flex;
  gap: 12px;
}
.articles__News{
  display: flex;
  gap: 12px;
}
</style>