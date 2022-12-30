
## Installation (安装)

```console
npm install meansjs
```

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
|  1        | test                                  |                 |

### :point_right: meAscii

* meAscii方法必须传递一个对象;

**示列**
```javascript
const params = {
  name:'means',
  id:1
};
const meAscii = meansJs.meAscii(params); // id1namemeans
```

### :point_right: meSort

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

### :point_right: meSortSize

**示列**
```javascript
const arr = ['meansjs','js-yyds','我最厉害','zh']
const size = meansJs.meSortSize(arr); // ['zh', 'meansjs', 'js-yyds', '我最厉害']
```

### :point_right: meCharacterSize

**示列**
```javascript
const size = means.meCharacterSize('meansjs还不错'); // 13
```

### :point_right: meDeepClone

* 对象或者数组都可以进行深拷贝

**示列**
```javascript
let arr = [{id:1,name:'我不是meansjs'}]
let deep = meansJs.meDeepClone(arr);
deep[0].name = '你不是meansjs,那你是个啥?'
console.log(deep); // name : "你不是meansjs,那你是个啥?"
console.log(arr); // name : "我不是meansjs"
```
### :point_right: meAntiShake

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
