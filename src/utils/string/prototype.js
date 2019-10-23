/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-14 16:05:18 
 * @Last Modified by: houzhiqiag
 * @Last Modified time: 2019-10-22 17:14:46
 */

/**
* 获取字符串的字节数，根据传入字节长度进行截取，扩展string类型方法
* @method getBytes
* @for 字符串方法
* @param {len, str} len 所需截取字节长度, str超出所替换的字符串
* @return {String/NUmber}}} 传入len时，返回字节长度为len的字符串，不传如len时返回该字符串的字符长度
* 当所截取最后一位字符为中文时，会保留该字符
*/
String.prototype.getBytes = function (len = 0, str = '') {
  let bytesCount = 0;
  let sliceBytesStr = "";
  let isOverstep = false;

  if (this != null) {
    for (let i = 0; i < this.length; i++) {
      let c = this.charAt(i);
      let byte = 1;
      if (/^[\u0000-\u00ff]$/.test(c)) {
        byte = 1;
      } else {
        byte = 2;
      }
      bytesCount += byte;
      if (bytesCount <= len) {
        sliceBytesStr += c;
      } else {
        isOverstep = true
      }
    }
  }

  // 是否存在字节长度限制，若不存在则返回字节长度
  if (!len) {

    return bytesCount;
  } else {
    // 是否超出给定字节长度，超出则进行拼接
    if (isOverstep) {

      return sliceBytesStr += str;
    } else {

      return sliceBytesStr;
    }
  }
};