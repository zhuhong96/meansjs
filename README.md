
### Installation (安装)

```console
npm install meansjs
```

### API (方法)

日常开发中所需要的方法

引入插件库
```javascript
import meansJs from 'meansjs';
```

| means(方法)                           |  功能           |
| :---                                  |  :---           |
| [meAscii](#meAscii)                   |  ASCII排序      |
| [meSort](#meSort)                     |    排序         |
| [meSortSize](#meSortSize)             |  字符长度排序    |
| [meCharacterSize](#meCharacterSize)   |   字符长度       |
| test                                  |                 |

#### meAscii

* meAscii方法必须传递一个对象;

***示列***
```javascript
const params = {
  name:'means',
  id:1
};
const meAscii = meansJs.meAscii(params); // id1namemeans
```

#### meSort

* arr： 排序数组
* type： asc 升序 ; desc 降序 --- 非必填
* key： 排序字段 --- 非必填

***示列***
```javascript
const arr = [
  {id:56},{id:98},{id:65}
];
const size = means.meSort({arr,type:'asc',key:'id'});
```

#### meSortSize

***示列***
```javascript
const arr = ['meansjs','js-yyds','我最厉害','zh']
const size = means.meSortSize(arr); // ['zh', 'meansjs', 'js-yyds', '我最厉害']
```

#### meCharacterSize

***示列***
```javascript
const size = means.meCharacterSize('meansjs还不错'); // 13
```

