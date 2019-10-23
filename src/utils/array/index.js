import './prototype'

export default {
	//获取最大值
	getMaxValue(arr) {
		return Math.max.apply(Math, arr);
	},
	//获取最小值
	getMinValue(arr) {
		return Math.min.apply(Math, arr);
	},
	//判断某个值是否在数组
	isInclude(arr, ele) {
		let len = arr.length;
		for (let i = 0; i < len; i++) {
			if (ele === arr[i]) {
				return true;
			}
		}
		return false;
	}
}