

/**
 * 获取最大值
 * @param {*} arr 
 * @param {*} key 
 */
const max = (arr = [], key = '') => {
    if (!arr.length) return console.warn('The array cannot be empty'); // 数组不能为空
    const isKeyObj = arr.some(item => { return Object.keys(item).length });
    if (isKeyObj && !key) return console.warn('key Cannot be empty'); // 二维数组并且key值空时

    let maxs;
    if (!isKeyObj) { // 一维数组
        maxs = arr.reduce((one, pro) => { return one < pro ? pro : one });
    } else if (key) {
        if (!arr.some(item => { return item[key] })) return console.warn(`Not found ${key} fields`);
        maxs = arr.reduce((one, pro) => { return one[key] < pro[key] ? pro : one })[key];
    };
    return maxs;
};

export default max;