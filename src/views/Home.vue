<template>
  <div class="container-fluid monarch-home-view">
    <vml-home-intro-component/>
    <vml-home-about-monarch-component/>
    <vml-home-news-component/>
    <vml-home-partners-component/>
    <div class="spacer"/>
  </div>
</template>


<style lang="scss">
  @import "~@/style/variables";

  div.container-fluid.monarch-home-view {
    padding: 0;
    background: $monarch-bg-color;

    .row {
      margin-left: 0;
      margin-right: 0;
    }
    .row > div {
      width: 100%;
    }

    .spacer {
      height: 50px;
    }

    // //
    // // Horizontal borders for debugging home page layout
    // //
    // > div:not(.row),
    // > .row > div {
    //   border-top:2px solid orange;
    //   border-bottom:2px solid orange;
    // }
  }
</style>


<script>
export default {
  name: 'Home',
  components: {
    'vml-home-intro-component': require('@/components/home/HomeIntro.md').default,
    'vml-home-about-monarch-component': require('@/components/home/HomeAboutMonarch.md').default,
    'vml-home-what-we-do-component': require('@/components/home/HomeWhatWeDo.md').default,
    'vml-home-news-component': require('@/components/home/HomeNews.md').default,
    'vml-home-partners-component': require('@/components/home/HomePartners.md').default,
    // 'vml-home-data-component': require('@/components/home/HomeData.md').default,
  },
};
</script>
