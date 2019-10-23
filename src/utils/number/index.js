/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:54:16 
 * @Last Modified by:   houzhiqiag 
 * @Last Modified time: 2019-10-23 10:54:16 
 */

import './prototype'

export default {
	//数字
	isNumeric(input) {
		return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
	},
	//小数
	isDecimal(input) {
		return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
	},
	//负小数
	isNegativeDecimal(input) {
		return /^\-(?:0|[1-9]\d*)\.\d+$/.test(input);
	},
	//正小数
	isPositiveDecimal(input) {
		return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
	},
	//整数
	isInteger(input) {
		return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
	},
	//正整数
	isPositiveInteger(input) {
		return /^\+?(?:0|[1-9]\d*)$/.test(input);
	},
	//负整数
	isNegativeInteger(input) {
		return /^\-(?:0|[1-9]\d*)$/.test(input);
	}
}