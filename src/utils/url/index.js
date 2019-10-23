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