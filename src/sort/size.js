
import character from "../character/index";

/**
 * 字符长度排序
 * @param {*} arr 数组
 * @returns 
 */
const sortSize = (arr = []) => {
    if (!arr.length) return console.warn('The array cannot be empty'); // 数组不能为空
    return arr.sort((a, b) => character(a) - character(b));
};

export default sortSize;