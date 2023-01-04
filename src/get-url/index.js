

/**
 * 获取url的值
 * @param {*} url 默认值为空
 * @returns 
 */
const getUrl = function (url = '') {
        // 获取url 传递传递过来的值
        const styleList = url ? url : window.location.href;
        // 查询/截取url中？开始 & 结束以内的值
        const styleOut = styleList.substring(styleList.indexOf('?') + 1).split('&');
        // 声明一个变量 用来接收
        let result = {};

        for (const i in styleOut) {
                const key = styleOut[i].split('=');
                result[key[0]] = key[1];
        };
        return result;
};

export default getUrl;