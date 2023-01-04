
## Installation (安装)

```console
npm install meansjs
```

> 也可下载/dist/meansjs.min.js中的文件使用


## API (方法)

日常开发中所需要的方法

引入插件库
```javascript
import meansJs from 'meansjs';
```

|  1        | means(方法) :wrench:                  |  功能 :dragon_face:|
|:---       | :---                                  |  :---           |
|  2        | [meAscii](#meAscii)                   |  ASCII排序      |
|  3        | [meSort](#meSort)                     |    排序         |
|  4        | [meSortSize](#meSortSize)             |  字符长度排序    |
|  5        | [meCharacterSize](#meCharacterSize)   |   字符长度       |
|  6        | [meDeepClone](#meDeepClone)           |  深拷贝         |
|  7        | [meAntiShake](#meAntiShake)           |  防抖           |
|  8        | [meThrottle](#meThrottle)             |  节流           |
|  9        | [meDeWeight](#meDeWeight)             |  数组去重       |

### meAscii

* meAscii方法必须传递一个对象;

**示列**
```javascript
const params = {
  name:'means',
  id:1
};
const meAscii = meansJs.meAscii(params); // id1namemeans
```

### meSort

* arr： 排序数组
* type： asc 升序 ; desc 降序 --- 非必填
* key： 排序字段 --- 非必填

**示列**
```javascript
const arr = [
  {id:56},{id:98},{id:65}
];
const size = meansJs.meSort({arr,type:'asc',key:'id'});
```

### meSortSize

**示列**
```javascript
const arr = ['meansjs','js-yyds','我最厉害','zh']
const size = meansJs.meSortSize(arr); // ['zh', 'meansjs', 'js-yyds', '我最厉害']
```

### meCharacterSize

**示列**
```javascript
const size = means.meCharacterSize('meansjs还不错'); // 13
```

### meDeepClone

* 对象或者数组都可以进行深拷贝

**示列**
```javascript
let arr = [{id:1,name:'我不是meansjs'}]
let deep = meansJs.meDeepClone(arr);
deep[0].name = '你不是meansjs,那你是个啥?'
console.log(deep); // name : "你不是meansjs,那你是个啥?"
console.log(arr); // name : "我不是meansjs"
```

### meAntiShake

* **fn** : 函数 
* **time** : 时间 --- 默认值 500

**示列**
```javascript
meansJs.meAntiShake({
    fn:()=>{
      console.log('我是meansjs');
    },
    time:1000
}) // or

meansJs.meAntiShake({
    fn:()=>{
      test() // 方法
    },
    time:1000
})
```

### meThrottle

* **fn** : 函数 
* **time** : 时间 --- 默认值 500

**示列**
```javascript
meansJs.meThrottle({
    fn:()=>{
      console.log('我是meansjs');
    },
    time:1000
}) // or

meansJs.meThrottle({
    fn:()=>{
      test() // 方法
    },
    time:1000
})
```

### meDeWeight

* arr： 排序数组
* key： 去重字段, 默认为空(一维数组)

**示列**
```javascript
let arr = [{id:10},{id:10},{id:2},{id:3},{id:2}];
// let arr = [1,2,1,2,3];
const meDeWeight = meansJs.meDeWeight(arr,'id');
```
