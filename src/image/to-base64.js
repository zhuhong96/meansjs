

/**
 * 图片链接转base64
 * @param {*} url 链接地址 -- 必填
 * @param {*} cb 回调函数
 * @param {*} quality 图片质量
 * @param {*} format 图片格式
 */
const toBase64 = (url, cb, quality = 0.92, format = 'webp') => {
    if (!url) return console.warn('url cannot be empty');
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        const imgWidth = img.width;
        const imgHeight = img.height;
        // canvas 宽高
        canvas.width = imgWidth;
        canvas.height = imgHeight;

        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
        const dataURL = canvas.toDataURL(`image/${format}`, quality);
        cb && cb(dataURL);
        canvas = null;
    };
    img.onerror = e => {
        throw new Error(`图片链接转base64出错：${e}`);
    }
    img.src = url;
}

export default toBase64;