<template>
	<div>
		<index-header></index-header>
		<index-slider :sliders="sliders"></index-slider>
    <index-icons :icons = "icons"></index-icons>
	</div>
</template>

<script>
import IndexHeader from './header'
import IndexSlider from './slider'
import IndexIcons from './icons'
import axios from 'axios'
export default {
  name: 'Index',
  data(){
  	return {
  		sliders:[],
      icons:[]
  	}
  },
  components:{
  	IndexHeader,
  	IndexSlider,
    IndexIcons
  },
  methods:{
  	getIndexData(){
  		axios.get('/api/index.json')
  			 .then(this.handleDataSucc.bind(this))
  			 .catch(this.handleDataError.bind(this))
  	},
  	handleDataSucc(res){
  		res = res ? res.data : null
  		if(res && res.ret && res.data){
  			if(res.data.slider){
  				this.sliders = res.data.slider
  			}
        if(res.data.icons){
          this.icons = res.data.icons
        }
  		}else{
  			this.handleDataError()
  		}
  	},
  	handleDataError(){
  		console.log('error')
  	}
  },
  mounted(){
  	this.getIndexData()
  }
}
</script>

<style>

</style>
