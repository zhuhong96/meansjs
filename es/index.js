/**
 * ASCII顺序排序
 * @param {*} obj 对象
 * @returns 
 */
var ascii = function ascii() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (Object.keys(obj).length) {
    return '必须传一个对象';
  }
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

/**
 * 字符长度
 * @param size 字符
 * @returns 
 */
var characterSize = function characterSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return size.toString().replace(/[\u0391-\uFFE5]/g, "aa").length;
};

/**
 * 字符长度排序
 * @param {*} arr 数组
 * @returns 
 */
var sortSize = function sortSize() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.sort(function (a, b) {
    return characterSize(a) - characterSize(b);
  });
};

/**
 * 排序
 * @param {*} arr 数组
 * @param {*} type asc 升序；desc 降序
 * @param {*} key 排序字段
 * @returns 
 */
var sort = function sort(_ref) {
  var _ref$arr = _ref.arr,
    arr = _ref$arr === void 0 ? [] : _ref$arr,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'asc' : _ref$type,
    _ref$key = _ref.key,
    key = _ref$key === void 0 ? '' : _ref$key;
  if (key == '') {
    if (type == 'asc') {
      // 升序
      return arr.sort(function (a, b) {
        return a - b;
      });
    } else {
      // 降序
      return arr.sort(function (a, b) {
        return b - a;
      });
    }
  } else {
    return arr.sort(function (a, b) {
      var obj1 = a[key],
        obj2 = b[key];
      var obj = obj1 - obj2;
      if (type == 'asc') {
        obj = obj1 - obj2;
      } else if (type == 'desc') {
        obj = obj2 - obj1;
      }
      return obj;
    });
  }
};

var index = {
  meAscii: ascii,
  meCharacterSize: characterSize,
  meSortSize: sortSize,
  meSort: sort
};

export { index as default };
