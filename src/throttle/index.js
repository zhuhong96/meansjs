
let timer = null;

/**
 * 节流
 * @param {*} fn 函数
 * @param {*} time 时间
 */
const throttle = function (foo, time) {
    // timer = null;
    // 返回一个函数值
    utils(foo, time);
};

const utils = function (fn, time = 500) {
    if (typeof fn !== 'function') throw new Error('fn must be function');
    // 将this指向赋值   此时的 this 指向的是 实例 button
    let context = this;
    // 获取传过来的值
    let ages = arguments;
    // 清除定时器
    if (!timer) {  // 判定timer没有数值
        // 声明一个定时器
        timer = setTimeout(() => {
            // 在定时器里面调用需要 节流的函数
            fn.call(context, ages)
            // 如果执行到这儿的是否需要把 timer 初始化 为null  ;便于下次判断
            clearTimeout(timer);
            timer = null;
        }, time)
    }
}

export default throttle;