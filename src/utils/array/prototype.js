/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-15 10:26:43 
 * @Last Modified by: houzhiqiag
 * @Last Modified time: 2019-10-23 10:33:36
*/

/**
* 方法说明
* @method sortByKey
* @for 数组中根据键值排序
* @param {key, isAscending} 参数名key为键名，isAscending默认为升序排序
* @return {_this} 返回值不会修改原来数组，返回排序后新数组
*/

Array.prototype.sortByKey = function (key = '', isAscending = true) {
  let _this = [...new Set(this)]
  try {

    for (let i = 0; i < _this.length; i++) {
      for (let j = 0; j < _this.length - 1 - i; j++) {
        if (Number(_this[j][key]) > Number(_this[j + 1][key])) {
          let temp = _this[j + 1]
          _this[j + 1] = _this[j]
          _this[j] = temp
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  if (isAscending) {
    return _this
  } else {
    return _this.reverse()
  }
}

/**
* 多维数组展开为一维数组
* @method flatten
* @for Array
* @param {} 
* 方法调用  Array.flatten()
* @return {Array} 返回值为展开后的一维数组
*/

Array.prototype.flatten = function () {
  const stack = [...this];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original this
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}

/**
* 展开树的所有节点
* @method flattenTree
* @for Array
* @param {flatKey} flatKey为递归展开所需的键
* 方法调用  Array.flattenTree('children')
* @return {Array} 返回值为展开的所有树节点，返回值不会修改原始数据
*/

Array.prototype.flattenTree = function (flatKey = "children") {
  // 展开树的所有节点
  let newArray = []

  function flatten(paramArr) {
    for (let i = 0; i < paramArr.length; i++) {
      newArray.push(paramArr[i])
      if (paramArr[i][flatKey] && paramArr[i][flatKey].length) {
        flatten(paramArr[i][flatKey])
      } else {
        continue;
      }
    }
  }
  flatten(this)
  return newArray
}

/**
* 格式化树数据
* @method formatTree
* @for Array
* @param {callback， loopKey} 
* callback接收一个参数，值为遍历出来的节点信息
* loopKey默认值为children，当子节点不为children时修改此值
* 调用方式 Array.formatTree(item=>{}, 'children')，修改item值，即可修改树节点值
* @return {Array} 返回值为格式化后的树形结构，返回值不会修改原始数据
*/
Array.prototype.formatTree = function (callback, loopKey = "children") {
  // 保证此节点的唯一性
  let nodeKey = 1
  // 递归遍历值
  function format(param) {
    return param.map((item) => {
      // 如果item存在以loopKey为键的子节点，即递归处理
      if (item[loopKey] && item[loopKey].length) format(item[loopKey])
      nodeKey++
      item['nodeKey'] = nodeKey
      return callback(item)
    })
  }

  return format(this)
}

/**
* 数组插值方法（将对象中键与数组item中的对象所含键所比较，将对象的值根据键赋值给数组）
* @method setValueByKey
* @for Array
* 方法调用：jsonArray.setValueByKey(dataObj, ['key'], ['value'])
* @param {objData, keyArr, valueArr} 
* objData为将要插入的数据对象，['key']是数组中所需插入比对时所需的键名数组,['value']是数组中所插入值的键名,
* @return {Array} 返回值为插值后的数组，此方法不会修改原始数据
*/

Array.prototype.setValueByKey = function (objData = {}, keyArr = ['key'], valueArr = ['value']) {
  if (JSON.stringify(objData) === '{}') return this
  return [...this].map((item) => {
    keyArr.forEach((ele, index) => {
      if (objData.hasOwnProperty(item[ele])) {
        let resultValue = objData[item[ele]]
        item[valueArr[index]] = resultValue === null ? '' : resultValue.toString()
      } else {
        item[valueArr[index]] = ''
      }
    })
    return item
  })
}

/**
* 数组随机排序（费雪耶兹（Fisher–Yates） 也被称作高纳德（ Knuth）随机置乱算法）
* @method shuffle
* @for Array
* @param {} 
* @return {Array} 返回值为随机排序后的数组
*/
Array.prototype.shuffle = function () {
  let _this = [...this];
  for (let i = _this.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (_this.length - 1))
    let storageItem = _this[i];
    _this[i] = _this[randomIndex]
    _this[randomIndex] = storageItem
  }
  return _this
}