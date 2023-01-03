

/**
 * 数组去重
 * @param {*} arr 数组
 * @param {*} key 默认为空,一维数组
 * @returns 
 */
const deWeight = function (arr, key = '') {
    const isKeyObj = arr.some(item => {return Object.keys(item).length });
    if (isKeyObj && !key) throw new Error('key值不能为空');
    
    const map = new Map();
    let arrs = [];
    if (!key) {
        arrs = arr.filter((item) => {return !map.has(item) && map.set(item)});
    }else if (key) {
        const isKey = arr.some(item => {return item[key] });
        if(!isKey) throw new Error(`数组中未查到${key}值，请检查修改`);
        
        arrs = arr.filter((item) => { return !map.has(item[key]) && map.set(item[key]) });
    };
    return arrs;
};

export default deWeight;