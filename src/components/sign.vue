<template>
	<view class="sign">
		<view class="title">变价通知我</view>
		<view class="txt">价格变动这么快？！订阅楼盘降价通知，楼盘降价我们将第一时间通知您</view>
		<view class="input">
			<input type="text" value="" placeholder="请输入手机号" placeholder-class="place" v-model="tel"/>
		</view>
		<view class="msg">
			<jiuaicheckbox @change='changeBox' borderStyle='1px solid #D4D7D9' color='#40A2F4' :checked='true' :borderRadius='6'
			 :fontSize='20' :checkBoxSize='30'></jiuaicheckbox>我已阅读并同意<text>《允家服务协议》</text>
		</view>
		<view class="btn">
			立即订阅
		</view>
		<view class="bomtxt">
			有专属咨询师为您提供专业的购房意见和1v1服务
		</view>
	</view>
</template>
<script>
	import jiuaicheckbox from '@/components/jiuai-checkbox/jiuai-checkbox.vue'
	export default {
		props: {
			title: {
				type: String
			},
			txt: {
				type: String
			}
		},
		data(){
			return {
				tel: ''
			}
		},
		components: {
			jiuaicheckbox
		},
		methods: {
			changeBox(e) { //选中切换事件(由组件发起)
				console.log('点击了checkBox', e);
			},
		}
	}
</script>
<style lang="less" scoped>
	.sign {
		padding: 0 36rpx;
	}

	.title {
		color: #1F1F1F;
		font-size: 44rpx;
		text-align: center;
		font-weight: bold;
		padding-top: 76rpx;
		margin-bottom: 44rpx;
	}

	.txt {
		color: #3D3D3D;
		font-size: 32rpx;
		line-height: 44rpx;
		margin-bottom: 60rpx;
	}

	.input {
		width: 570rpx;
		height: 110rpx;
		border-radius: 12rpx;
		border: 3rpx solid #B3B3B3;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;

		input {
			margin-left: 32rpx;
			font-size: 32rpx;
		}

		.place {
			color: #999999;
			font-size: 32rpx;
		}
	}

	.msg {
		color: #7A7A7A;
		font-size: 24rpx;
		margin-bottom: 68rpx;

		text {
			color: #7495BD;
		}
	}

	.btn {
		width: 100%;
		height: 88rpx;
		border-radius: 12rpx;
		text-align: center;
		line-height: 88rpx;
		background-color: #3EACF0;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.bomtxt {
		color: #8F8F8F;
		font-size: 24rpx;
	}
</style>
