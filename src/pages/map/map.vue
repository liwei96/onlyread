<template>
	<view class="map">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>地图找房</text>
		</view>
		<view class="icons">
			<view class="li">
				区域
				<image src="../../static/search/search-down1.png" mode=""></image>
			</view>
			<view class="li">
				价格
				<image src="../../static/search/search-down1.png" mode=""></image>
			</view>
			<view class="li">
				户型
				<image src="../../static/search/search-down1.png" mode=""></image>
			</view>
			<view class="li">
				更多
				<image src="../../static/search/search-down1.png" mode=""></image>
			</view>
			<image src="../../static/other/map-list.png" mode="" class="list"></image>
		</view>
		<!-- <view class="mapbox">
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers" @labeltap="show" @regionchange="edit" @updated="kk">
			</map>
		</view> -->
		<!-- <view style="background: linear-gradient(-45deg, #6ACCFF, #6ACCFF);text-align: center;width: 140rpx;height: 140rpx;display: flex;flex-direction: column;align-items: center;justify-content: center;">
			<view style="font-size: 32rpx;margin-bottom: 20rpx;">余杭</view>
			<view style="font-size: 24rpx;">56个</view>
		</view> -->
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true">
		   <sign></sign>
		</wyb-popup>
		
	</view>
</template>

<script>
	import sign from '@/components/sign.vue'
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default {
		components:{
			sign,
			 wybPopup
		},
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
						latitude: 39.909,
						longitude: 116.39742,
						label: {
							content: '余杭\n\n56个',
							color: '#FFFFFF',
							bgColor: '#6ACCFF',
							padding: '15px 28px',
							textAlign: 'center',
							x: -30,
							y: -30,
							borderWidth: 4,
							borderColor: '#6ACCFF',
							borderRadius: '50%',
							fontSize: '16px'
						}
					},
					{
						latitude: 39.90,
						longitude: 116.39,
						label: {
							content: '绿地华家池印\n约4200元/m²',
							color: '#FFFFFF',
							bgColor: '#348AFF',
							padding: '6px 36px',
							textAlign: 'center',
							x: -30,
							y: -30,
							borderWidth: 4,
							borderColor: '#6ACCFF',
							borderRadius: '30px',
							fontSize: '12px'
						}
					}
				]
			}
		},
		methods: {
			show(e) {
				console.log(e)
			},
			edit(e) {
				console.log(e)
			},
			kk(e) {
				console.log(e)
			}
		},
		mounted() {
			this.$refs.popup.show()
		}
	}
</script>

<style lang="less">
	.map {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.toptitle {
		color: #17181A;
		font-size: 32rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}

	.icons {
		display: flex;
		height: 96rpx;
		align-items: center;
		justify-content: space-around;

		.li {
			color: #323233;
			font-size: 28rpx;

			image {
				width: 16rpx;
				height: 16rpx;
				margin-left: 8rpx;
			}
		}

		.list {
			width: 48rpx;
			height: 48rpx;
		}
	}

	.mapbox {
		flex: 1;
	}
</style>
