/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:54:42 
 * @Last Modified by:   houzhiqiag 
 * @Last Modified time: 2019-10-23 10:54:42 
 */

import './prototype'

export default {
	// 字符串是否为空
	isEmpty(input) {
		return input === null || input === '';
	},
	// 字符串是否存在非空字符
	isBlank(input) {
		return input === null || /^\s*$/.test(input);
	},
	// 字符串是否完全相等
	isEquals(input1, input2) {
		return input1 === input2;
	},
	// 字符串忽略大小写是否相等
	isEqualsIgnoreCase(input1, input2) {
		return input1.toLocaleLowerCase() == input2.toLocaleLowerCase();
	},
	// 字符串是否包含
	isContains(input, searchSeq) {
		return input.indexOf(searchSeq) >= 0;
	},
	// 是否为英文
	isEnWords() {
		return /^[a-z]+$/i.test(input);
	},
	//只包含字母、空格
	isEnSpace(input) {
		return /^[a-z\s]*$/i.test(input);
	},
	//只包含字母、数字
	isEnNumber(input) {
		return /^[a-z0-9]+$/i.test(input);
	},
	//只包含字母、数字和空格
	isEnNumberSpace(input) {
		return /^[a-z0-9\s]*$/i.test(input);
	},
	// 是否为中文
	isChinese() {
		return /^[\u4E00-\u9FA5]+$/.test(input);
	},
	//去掉中文字符
	removeChinese(input) {
		return input.replace(/[\u4E00-\u9FA5]+/gm, "");
	},
	// 移除字符串内空白字符
	removeBlank(input) {
		return input.replace(/\s+/g, '');
	},
	//首字母大写
	firstToUppercase(input) {
		if (input === null || input.length === 0) {
			return input;
		}
		return input.replace(/^[a-z]/, (matchStr) => {
			return matchStr.toLocaleUpperCase();
		});
	},
	//首字母小写
	firstToLowerCase(input) {
		if (input === null || input.length === 0) {
			return input;
		}
		return input.replace(/^[A-Z]/, (matchStr) => {
			return matchStr.toLocaleUpperCase();
		});
	},
	// 大小写互转
	toogleSwapCase(input) {
		return input.replace(/[a-z]/ig, (matchStr) => {
			if (matchStr >= 'A' && matchStr <= 'Z') {
				return matchStr.toLocaleLowerCase();
			} else if (matchStr >= 'a' && matchStr <= 'z') {
				return matchStr.toLocaleUpperCase();
			}
		});
	},
	//字符串反转
	reverse(input) {
		if (this.isBlank(input)) {
			input;
		}
		return input.split("").reverse().join("");
	},
	//转义元字符
	escapeMetacharacter(input) {
		const metacharacter = "^$()*+.[]|\\-?{}";
		if (metacharacter.indexOf(input) >= 0) {
			input = "\\" + input;
		}
		return input;
	},
	//转义字符串中的元字符
	escapeMetacharacterOfStr(input) {
		return input.replace(/[-$^()*+.\[\]|\\?{}]/gm, "\\$&");
	},
	//中文转为unicode编码
	chineseToUnicode(input) {
		return input.replace(/[\u4E00-\u9FA5]/g, (matchStr) => {
			return "\\u" + matchStr.charCodeAt(0).toString(16);
		});
	},

	//英文状态下移除特殊字符
	removeSpecialCharacter(input) {
		return input.replace(/[!-/:-@\[-`{-~]/g, "");
	}
}

