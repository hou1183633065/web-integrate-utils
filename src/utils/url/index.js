/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:54:35 
 * @Last Modified by: houzhiqiag
 * @Last Modified time: 2019-10-23 11:17:32
 */

export default {
  REGEXS: {
    URL_PATTERN: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
    PARAMS_PATTERN: /(\w+)=([^&#]*)/igm,
  },
  // 检索是否为合法URL
  isUrl(input) {
    return this.REGEXS.URL_PATTERN.test(input)
  },
  urlTransformParams(url) {
    let matchStr = null;
    let params = {};
    while ((matchStr = this.REGEXS.PARAMS_PATTERN.exec(url)) != null) {
      params[matchStr[1]] = matchStr[2];
    }
    return params;
  },
  // 路由传参转unicode码
  urlEncode(params) {
    return window.encodeURIComponent(JSON.stringify(params))
  },
  // 路由传参转解析unicode码
  urlDecode(url) {
    return JSON.parse(window.decodeURIComponent(url))
  }
  // isNum(input) {
  //   return /^\d+(\.\d+)?$/.test(input);
  // }
}