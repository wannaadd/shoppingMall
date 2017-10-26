<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
	    <swiper-slide>
				<img src="http://img06.yiguoimg.com/d/others/171013/9288713849414477.jpg">
			</swiper-slide>
	    <swiper-slide>
				<img src="http://img07.yiguoimg.com/d/others/171019/9288714067944275.jpg">
			</swiper-slide>
	    <swiper-slide>
				<img src="http://img05.yiguoimg.com/d/others/171020/9288714103694164.jpg">
			</swiper-slide>
	    <swiper-slide>
				<img src="http://img05.yiguoimg.com/e/others/170505/9288707396444837.jpg">
			</swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>//
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	  </swiper>
		<navbar></navbar>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Navbar from './Nav'
	export default {
		data() {
			return {
				swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
					loop: true,
					effect: 'fade',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          mousewheelControl : true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
        }
			}
		},
		components: {
			swiper,swiperSlide,Navbar
		},
		computed: {
		  swiper() {
		    return this.$refs.mySwiper.swiper
		  }
		}
	}
</script>

<style lang="scss">
	.banner{
		position: relative;
		.swiper-wrap{
			height: auto;
		}
		.swiper-slide{
			img{
				transform: scale(1.2);
				transition: transform 1s;
			}
		}
		.swiper-slide-active{
			img{
				transform: scale(1.1);
			}
		}
	}
</style>
