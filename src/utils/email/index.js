export default {
  REGEXS: {
    EMAIL_PATTERN: /^[-\w\+]+(?:\.[-\w]+)*@[-a-z0-9]+(?:\.[a-z0-9]+)*(?:\.[a-z]{2,})$/i
  },
  //邮箱格式校验
  isEmail(input) {
    return this.REGEXS.EMAIL_PATTERN.test(input);
  }
}
