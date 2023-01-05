

/**
 * 数组去重
 * @param {*} arr 数组
 * @param {*} key 默认为空,一维数组
 * @returns 
 */
const deWeight = function (arr = [], key = '') {
    if(!arr.length) return console.warn('The array cannot be empty'); // 数组不能为空
    const isKeyObj = arr.some(item => { return Object.keys(item).length });
    if (isKeyObj && !key) return console.warn('key Cannot be empty'); // 二维数组并且key值空时

    const map = new Map();
    let arrs = [];
    if (!isKeyObj) { // 一维数组
        arrs = arr.filter((item) => { return !map.has(item) && map.set(item) });
    } else if (key) {
        const isKey = arr.some(item => { return item[key] });
        if (!isKey) return console.warn(`Not found ${key} fields`);

        arrs = arr.filter((item) => { return !map.has(item[key]) && map.set(item[key]) });
    };
    return arrs;
};

export default deWeight;