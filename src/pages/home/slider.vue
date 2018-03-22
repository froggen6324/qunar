<template>
	<swiper class="banner index-banner" :options="swiperOption">
	    <swiper-slide v-for="item in sliders" :key="item.id">
			<img class="banner-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>

export default {
  name: 'index-slider',
  props: {
  	sliders:Array
  },
  data() {
      return {
        swiperOption: {
        	pagination:".swiper-pagination",
        	autoplay:3000,
        	loop:true,
        	slidesPerView : 'auto',
			loopedSlides :8,
			autoplayDisableOnInteraction : false
        }
      }
   }
}
</script>

<style scoped lang="stylus">
	.banner
		height:0
		overflow:hidden
		padding-bottom:38.89%
		.banner-img
			width:100%
</style>
<style lang="stylus">
	.index-banner
		.swiper-pagination-bullet
			background:#fff
</style>