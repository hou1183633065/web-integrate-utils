export default {

	// patterns: {
	// 	PATTERN_ERA: 'G', //Era 标志符 Era strings. For example: "AD" and "BC"
	// 	PATTERN_YEAR: 'y', //年
	// 	PATTERN_MONTH: 'M', //月份
	// 	PATTERN_DAY_OF_MONTH: 'd', //月份的天数
	// 	PATTERN_HOUR_OF_DAY1: 'k', //一天中的小时数（1-24）
	// 	PATTERN_HOUR_OF_DAY0: 'H', //24小时制，一天中的小时数（0-23）
	// 	PATTERN_MINUTE: 'm', //小时中的分钟数
	// 	PATTERN_SECOND: 's', //秒
	// 	PATTERN_MILLISECOND: 'S', //毫秒
	// 	PATTERN_DAY_OF_WEEK: 'E', //一周中对应的星期，如星期一，周一
	// 	PATTERN_DAY_OF_YEAR: 'D', //一年中的第几天
	// 	PATTERN_DAY_OF_WEEK_IN_MONTH: 'F', //一月中的第几个星期(会把这个月总共过的天数除以7,不够准确，推荐用W)
	// 	PATTERN_WEEK_OF_YEAR: 'w', //一年中的第几个星期
	// 	PATTERN_WEEK_OF_MONTH: 'W', //一月中的第几星期(会根据实际情况来算)
	// 	PATTERN_AM_PM: 'a', //上下午标识
	// 	PATTERN_HOUR1: 'h', //12小时制 ，am/pm 中的小时数（1-12）
	// 	PATTERN_HOUR0: 'K', //和h类型
	// 	PATTERN_ZONE_NAME: 'z', //时区名
	// 	PATTERN_ZONE_VALUE: 'Z', //时区值
	// 	PATTERN_WEEK_YEAR: 'Y', //和y类型
	// 	PATTERN_ISO_DAY_OF_WEEK: 'u',
	// 	PATTERN_ISO_ZONE: 'X'
	// },
	// week: {
	// 	'ch': {
	// 		"0": "\u65e5",
	// 		"1": "\u4e00",
	// 		"2": "\u4e8c",
	// 		"3": "\u4e09",
	// 		"4": "\u56db",
	// 		"5": "\u4e94",
	// 		"6": "\u516d"
	// 	},
	// 	'en': {
	// 		"0": "Sunday",
	// 		"1": "Monday",
	// 		"2": "Tuesday",
	// 		"3": "Wednesday",
	// 		"4": "Thursday",
	// 		"5": "Friday",
	// 		"6": "Saturday"
	// 	}
	// },
	/**
	* 时间戳转换成指定格式日期
	* @method timestampFormat
	* @for Date
	* @param {formats:String} formats为时间戳转换后的格式
	* 调用： timestamp.timestampFormat('Y-M-D H:I:S')
	* @return {String}}} 返回值为时间戳转换后的字符串
	*/
	timestampFormat(timestamp = Date.now(), formats = 'Y-M-D H:I:S') {
		if (!timestamp) timestamp = Date.now()
		timestamp = Number(timestamp)
		function zero(value) {
			if (value < 10) {
				return '0' + value;
			}
			return value;
		};

		let myDate = timestamp ? new Date(timestamp) : new Date();

		let year = myDate.getFullYear();
		let month = zero(myDate.getMonth() + 1);
		let day = zero(myDate.getDate());

		let hour = zero(myDate.getHours());
		let minite = zero(myDate.getMinutes());
		let second = zero(myDate.getSeconds());

		return formats.replace(/Y|M|D|H|I|S/ig, (matches) => {

			return ({
				Y: year,
				M: month,
				D: day,
				H: hour,
				I: minite,
				S: second
			})[matches];
		});
	},
	//是否闰年
	isLeapYear(year) {
		return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	},
	//获取某个月的天数，从1开始
	getDaysOfMonth(year, month) {
		return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
	},

	/**
	 * 计算一个日期是当年的第几天
	 * @param {Object} date为一个日期对象
	 */
	dayOfTheYear(date) {
		let obj = new Date(date);
		let year = obj.getFullYear();
		let month = obj.getMonth(); //从0开始
		let days = obj.getDate();
		let daysArr = [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		for (let i = 0; i < month; i++) {
			days += daysArr[i];
		}
		return days;
	},

	//获得时区名和值
	getZoneNameValue(dateObj) {
		let date = new Date(dateObj);
		date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
		let arr = date.toString().match(/([A-Z]+)([-+]\d+:?\d+)/);
		let obj = {
			'name': arr[1],
			'value': arr[2]
		};
		return obj;
	}
}