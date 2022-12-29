'use strict';

/**
 * ASCII顺序排序
 * @param {*} obj 对象
 * @returns 
 */
var ascii = function ascii(obj) {
  var arr = new Array();
  var num = 0;
  for (var i in obj) {
    arr[num] = i;
    num++;
  }
  var sortArr = arr.sort();
  var str = ''; //自定义排序字符串
  for (var _i in sortArr) {
    str += sortArr[_i] + obj[sortArr[_i]];
  }
  return str;
};

var index = {
  mAscii: ascii
};

module.exports = index;
