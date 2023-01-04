

/**
 * base64转file文件
 * @param {*} base base64
 * @param {*} filename 名称
 * @returns 
 */
const base64File = (base, filename = new Date().getTime()) => {
    let arr = base.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let suffix = mime.split("/")[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    //转换成file对象
    return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};


export default base64File;