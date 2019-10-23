/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:54:35 
 * @Last Modified by:   houzhiqiag 
 * @Last Modified time: 2019-10-23 10:54:35 
 */

export default {
  REGEXS: {
    URL_PATTERN: /(\w+)=([^&#]*)/igm
  },
  isUrl() {

  },
  getParams(url) {
    let matchStr = null;
    let params = {};
    while ((matchStr = this.REGEXS.URL_PATTERN.exec(url)) != null) {
      params[matchStr[1]] = matchStr[2];
    }
    return params;
  },
}