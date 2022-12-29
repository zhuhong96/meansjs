
import character from "../character/index";

/**
 * 字符长度排序
 * @param {*} arr 数组
 * @returns 
 */
const sortSize = (arr = []) => {
    return arr.sort((a, b) => character(a) - character(b));
};

export default sortSize;