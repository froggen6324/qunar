<template>
	<div class="header">
		<div class="back iconfont">&#xe675;</div>
		<div class="search">
			<span class="iconfont-search iconfont">&#xe609;</span>
			请输入城市/景点/游玩主题
		</div>
		<div class="city">北京</div>
	</div>
</template>

<script>

export default {
  name: 'IndexHeader'

}
</script>

<style scoped lang='stylus'>
.header
	height:.88rem
	background:#00bcd4
	display:flex
	.back
		width:.8rem
		line-height:.88rem
		text-align:center
		font-size:.44rem
		font-weight:bold
		color:#fff
	.search
		flex:1
		height:.7rem
		background:#fff
		margin:auto
		line-height:.7rem
		text-indent:.2rem
		color:#ccc
		border-radius:.1rem
		.iconfont-search
			position:relative
			top:.01rem
	.city
		position:relative
		float:right
		max-width:1.6rem
		line-height:.88rem
		color:#fff
		font-size:.28rem
		padding:0 .46rem 0 .22rem
		white-space:nowrap
		overflow:hidden
		text-overflow:ellipsis
		&::before
			position:absolute
			right:.16rem
			top:.38rem
			content:'\0020'
			width:0
			height:0
			border-left:.12rem solid transparent
			border-right:.12rem solid transparent
			border-top:.12rem solid #fff

</style>