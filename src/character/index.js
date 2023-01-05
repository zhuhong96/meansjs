

/**
 * 字符长度
 * @param size 字符
 * @returns 
 */
const characterSize = (size = '') => {
    return size.toString().replace(/[\u0391-\uFFE5]/g, "aa").length
};

export default characterSize;