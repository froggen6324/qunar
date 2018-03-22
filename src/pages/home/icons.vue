<template>
	<swiper class="icons index-icons" :options="swiperOption">
	    <swiper-slide class="icons-wrapper" v-for="(page,index) in pages" :key="index">
	    	<div class="icons-each" v-for="item in page" :key="item.id">
	    		<img class="icons-img" :src="item.imgUrl">
	    		<p class="icons-title" v-text="item.title"></p>
	    	</div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>

export default {
  name: 'index-icons',
  props:{
  	icons:Array
  },
  data() {
      return {
        swiperOption: {
        	pagination:".swiper-pagination",
        	loop:true,
        	slidesPerView:'auto',
        	loopedSlides:8
        }
      }
   },
   computed:{
   	   pages () {
   	   		const pages = []
   	   		this.icons.forEach((value,index)=>{
   	   			let page = Math.floor(index/8)
   	   			if(!pages[page]){
   	   				pages[page] = []
   	   			}
   	   			pages[page].push(value)
   	   		})
   	   		return pages
   	   }

   }
}
</script>

<style scoped lang="stylus">
	.icons
		height:0
		overflow:hidden
		padding-bottom:3.5rem
		.icons-wrapper
			display:flex
			flex-wrap:wrap
			.icons-each
				width:25%
				text-align:center
				margin-top:.12rem
				.icons-img
					width:.9rem
					height:.9rem
				.icons-title
					margin-top:.1rem
					color:#333
</style>
<style lang="stylus">
	.index-icons
		.swiper-pagination-bullet
			background:#00bcd4
</style>

