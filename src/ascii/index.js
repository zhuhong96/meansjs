

/**
 * ASCII顺序排序
 * @param {*} obj 对象
 * @returns 
 */
const ascii = (obj={}) => {
    if (!Object.keys(obj).length) {
        return '必须传一个对象';
    };
    let arr = new Array();
    let num = 0;
    for (let i in obj) {
        arr[num] = i;
        num++;
    };
    let sortArr = arr.sort();
    let str = '';             //自定义排序字符串
    for (let i in sortArr) {
        str += sortArr[i] + obj[sortArr[i]];
    };
    return str;
};

export default ascii;