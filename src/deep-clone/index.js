

/**
 * 深拷贝
 * @param {*} deep 
 * @returns 
 */
const deepClone = (deep) => {
    // 1.判断 返回的变量为 数组还是对象
    var clone = Array.isArray(deep) ? [] : {}
    // 2.判定传进来的数组是否有值和 是否为对象
    if (deep && typeof deep === "object") {
        // 3.迭代数组中的每一个数值
        for (var key in deep) {
            // 4. hasOwnProperty 查找属性是都在自身身上;如果在就返回为true 否则就false  原型链不算
            if (deep.hasOwnProperty(key)) {
                // console.log(deep[key]);
                // 5.判断数据是否是对象;如果是就在调用递归函数继续执行
                if (deep[key] && typeof deep[key] === 'object') {
                    clone[key] = deepClone(deep[key])
                } else {
                    // 6.如果不等于对象就直接赋值返回                        
                    clone[key] = deep[key]
                }
            }
        }
    };
    // 7.返回
    return clone;
};

export default deepClone;