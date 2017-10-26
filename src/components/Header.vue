<template>
	<div class="header">
		<el-row>
	    <el-col :span="12">
				<div class="grid-content bg-purple">
					Fruits shopping
				</div>
			</el-col>
	    <el-col :span="12">
				<div class="grid-content bg-purple-light">
					<el-autocomplete
			      class="inline-input"
			      v-model="state1"
			      :fetch-suggestions="querySearch"
			      placeholder="请输入您需要的商品"
			      @select="handleSelect">
						<el-button slot="append" icon="search"></el-button>
					</el-autocomplete>
					<!-- <el-breadcrumb separator=" ">
					  <el-breadcrumb-item>苹果</el-breadcrumb-item>
					  <el-breadcrumb-item>香蕉</el-breadcrumb-item>
					  <el-breadcrumb-item>葡萄</el-breadcrumb-item>
					  <el-breadcrumb-item></el-breadcrumb-item>
					</el-breadcrumb> -->
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				restaurants: [],
        state1: '',
        state2: ''
			}
		},
		methods: {
			querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
			createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
			loadAll() {
        return [
          { "value": "苹果", "address": "" },
          { "value": "橙子", "address": "" },
          { "value": "香蕉", "address": "" },
          { "value": "菠萝", "address": "" }
				]
			},
			handleSelect(item) {
        console.log(item);
      }
		},
		mounted() {
      this.restaurants = this.loadAll();
    }
	}
</script>

<style lang="scss">
	.header{
		width: 1170px;
		margin: 0 auto;
	}
  .grid-content {
    min-height: 80px;
		color: rgb(254, 87, 34);
		font-size: 30px;
		font-weight: bold;
		text-align: left;
		line-height: 80px;
		.el-autocomplete{
			width: 60%;
			.el-input{
				top: -5px;
			}
		}
  }
</style>
