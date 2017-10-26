<template>
	<div class="nav">
		<el-dropdown @command="handleCommand">
		  <span class="el-dropdown-link">
		    全部商品分类<i class="el-icon-caret-bottom el-icon--right"></i>
		  </span>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item command="a">
					<el-dropdown @command="handleCommand">
					  <span class="el-dropdown-link">
					    全部商品分类
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
					    <el-dropdown-item command="b">狮子头</el-dropdown-item>
					    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
					    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
					    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</el-dropdown-item>
		    <el-dropdown-item command="b">狮子头</el-dropdown-item>
		    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
		    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
		    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleCommand() {

			}
		}
	}
</script>

<style lang="scss">
	.nav{
		width: 180px;
		position: absolute;
		top: 0;
		left: 100px;
		z-index: 999;
		.el-dropdown{
			width: 100%;
			height: 38px;
			line-height: 38px;
			background: #008842;
			font-size: 16px;
			color: #fff;
		}
	}
	.el-dropdown-menu{
		width: 180px;
		border: none;
		margin: 0;
	}
</style>
