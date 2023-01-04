
## Installation (安装)

```console
npm install meansjs
```

> 也可下载/dist/meansjs.min.js中的文件使用

## TS 项目 引入文件

+ 在项目中找到后缀 **.d.ts** 的文件(vue3中是shims-vue.d.ts)；如果没有就自行创建
+ 将 declare module 'meansjs'; 引入其中即可


**示列**
```javascript
// ./src/shims-vue.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default componen
}
declare module 'meansjs'; // 示列
```


## API (方法)

日常开发中所需要的方法

引入插件库
```javascript
import meansJs from 'meansjs';
```

|  1        | means(方法) :wrench:                  |  功能 :dragon_face:  |      返回类型       |
|:---       | :---                                  |  :---               |          ---:      |
|  2        | [meAscii](#meAscii)                   |  ASCII排序          |       string       |
|  3        | [meSort](#meSort)                     |    排序             |       Array        |
|  4        | [meSortSize](#meSortSize)             |  字符长度排序        |       Array        |
|  5        | [meCharacterSize](#meCharacterSize)   |   字符长度           |       number       |
|  6        | [meDeepClone](#meDeepClone)           |  深拷贝             |     Array / object  |
|  7        | [meAntiShake](#meAntiShake)           |  防抖               |          -           |
|  8        | [meThrottle](#meThrottle)             |  节流               |          -           |
|  9        | [meDeWeight](#meDeWeight)             |  数组去重           |          Array       |
|  10       | [meGetUrl](#meGetUrl)                 |  获取url的值        |         object       |
|  11       | [meTerminal](#meTerminal)             |  终端判断           |         object       |
|  12       | [meToBase64](#meToBase64)             |  图片链接转为base64 |         string        |
|  13       | [meBase64File](#meBase64File)         |  base64转为file文件 |        object / file  |

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

### meGetUrl

* 默认值-空（获取当前页面url）；非空时：获取传递链接url的值
* 返回对象

**示列**
```javascript
meansJs.meGetUrl("http://localhost:8080/#/about?id=12&name='wode'&dsj='dsajk'") // or
meansJs.meGetUrl() // 获取当前页面url的值
```

### meTerminal

**示列**
```javascript
meansJs.meTerminal() // or
meansJs.meTerminal()['weixin']
```

**返回参数**
```javascript
ali: false
android: false
gecko: true
iPad: false
iPhone: false
ios: false
mobile: false
presto: false
trident: false
webApp: true
webKit: false
weixin: false
```

### meToBase64

* 第一个值：图片链接
* 第二个值：回调函数
* 第三个值：图片质量 --- 默认值 0.92
* 第四个值：图片格式 --- 默认值 webp（可以不填，但是不能填空字符串）

**示列**
```javascript
meansJs.meToBase64('https://img0.baidu.com/it/u=2692044174,3628684553&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=780',(base64)=>{
  console.log(base64);
  this.base64 = base64;
},0.82,'png',)
```

### meBase64File

* 第一个值：base64
* 第二个值：文件名字 --- 默认值 时间戳

**示列**
```javascript
meansJs.meToBase64('https://img0.baidu.com/it/u=2692044174,3628684553&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=780',(base64)=>{
  const file = meansJs.meBase64File(base64,'meansjs');
  console.log(file);
},0.82,'png',)
```