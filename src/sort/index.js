
/**
 * 排序
 * @param {*} arr 数组
 * @param {*} type asc 升序；desc 降序
 * @param {*} key 排序字段
 * @returns 
 */
const sort = (arr = [], type = 'asc', key = '') => {
    if (!arr.length) return console.warn('The array cannot be empty'); // 数组不能为空
    const isKeyObj = arr.some(item => { return Object.keys(item).length });
    if (isKeyObj && !key) throw new Error('key Cannot be empty'); // 二维数组并且key值空时

    if (!isKeyObj) {
        if (type == 'asc') { // 升序
            return arr.sort((a, b) => { return a - b });
        } else { // 降序
            return arr.sort((a, b) => { return b - a });
        }
    } else {
        return arr.sort(function (a, b) {
            let obj1 = a[key], obj2 = b[key];
            let obj = obj1 - obj2;
            if (type == 'asc') {
                obj = obj1 - obj2;
            } else if (type == 'desc') {
                obj = obj2 - obj1;
            };
            return obj;
        });
    };
};

export default sort;