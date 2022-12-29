
/**
 * 排序
 * @param {*} arr 数组
 * @param {*} type asc 升序；desc 降序
 * @param {*} key 排序字段
 * @returns 
 */
const sort = ({arr = [],type = 'asc',key = ''}) => {
    if (key == '') {
        if (type == 'asc') { // 升序
            return arr.sort((a,b)=>{return a - b});
        }else { // 降序
            return arr.sort((a,b)=>{return b - a});
        }
    }else {
        return arr.sort(function (a, b) {
            let obj1 = a[key], obj2 = b[key];
            let obj = obj1 - obj2;
            if(type == 'asc') {
                obj = obj1 - obj2;
            }else if (type == 'desc') {
                obj = obj2 - obj1;
            };
            return obj;
        });
    };
};

export default sort;