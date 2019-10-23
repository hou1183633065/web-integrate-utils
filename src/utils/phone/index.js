/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:54:51 
 * @Last Modified by:   houzhiqiag 
 * @Last Modified time: 2019-10-23 10:54:51 
 */

export default {
  REGEXS: {
    //中国电信号码段			 
    CHINA_TELECOM_PATTERN: /^(?:\+86)?1(?:33|53|7[37]|8[019])\d{8}$|^(?:\+86)?1700\d{7}$/,
    //中国联通号码段
    CHINA_UNICOM_PATTERN: /^(?:\+86)?1(?:3[0-2]|4[5]|5[56]|7[56]|8[56])\d{8}$|^(?:\+86)?170[7-9]\d{7}$/,
    //中国移动号码段
    CHINA_MOBILE_PATTERN: /^(?:\+86)?1(?:3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$|^(?:\+86)?1705\d{7}$/,
    //电话座机号码段
    FIXED_TEL_PATTERN: /^(?:\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(?:-\d{1,4})?$/,
    //手机号码
    PHONE_PATTERN: /^(?:\+86)?(?:13\d|14[57]|15[0-35-9]|17[35-8]|18\d)\d{8}$|^(?:\+86)?170[057-9]\d{7}$/,
    //手机号简单校验，不根据运营商分类
    PHONE_SIMPLE_PATTERN: /^(?:\+86)?1\d{10}$/
  },
  //固定电话
  isPhoneCallNum(input) {
    return this.REGEXS.FIXED_TEL_PATTERN.test(input);
  },
  //电信手机号码
  isChinaTelecomPhone(input) {
    return this.REGEXS.CHINA_TELECOM_PATTERN.test(input);
  },
  //中国联通
  isChinaUnicomPhone(input) {
    return this.REGEXS.CHINA_UNICOM_PATTERN.test(input);
  },
  //中国移动
  isChinaMobilePhone(input) {
    return this.REGEXS.CHINA_MOBILE_PATTERN.test(input);
  },
  //手机号码
  isPhone(input) {
    return this.REGEXS.PHONE_PATTERN.test(input);
  },
  //手机号码简单校验，只校验长度
  isPhoneNumBySize(input) {
    return this.REGEXS.PHONE_SIMPLE_PATTERN.test(input);
  }
}
