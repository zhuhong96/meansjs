

let timer = null

/**
 * 防抖
 * @param {*} fn 函数 
 * @param {*} time 时间 
 * @returns 
 */
const antiShake = function (foo) {

    // 如果有时间就清除
    if (timer) clearTimeout(timer);

    shake(foo);
};

const shake = function ({ fn, time = 500}) {
    if(typeof fn !== 'function') throw new Error('fn must be function');
    const context = this;
    let ages = arguments;
    timer = setTimeout(() => {
        // 在定时器里面调用需要 防抖的函数
        fn.call(context, ages)
    }, time);
}


export default antiShake;