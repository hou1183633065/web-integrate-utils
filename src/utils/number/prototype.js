/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:54:11 
 * @Last Modified by:   houzhiqiag 
 * @Last Modified time: 2019-10-23 10:54:11 
 */
/**
* 方法说明
* @method 尾递归阶乘
* @for Number
* @param Number.factorial()
* @return 返回计算阶乘后的结果
*/
Number.prototype.factorial = function () {
  function c(num = 1) {
    if (num <= 1) return 1
    return num * c(num - 1)
  }
  return c(parseInt(this || 1))
}