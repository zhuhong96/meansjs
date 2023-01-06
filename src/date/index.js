
let myDate = new Date(); //实例一个时间对象；
let year = myDate.getFullYear(); //获取系统的年；
let month = myDate.getMonth() + 1; //获取系统的年；
let d = myDate.getDate(); // 获取系统日，
month = month < 10 ? "0" + month : month;
d = d < 10 ? "0" + d : d;

// 年月日
const date = function () {
    myDate = new Date();
    return year + "-" + month + "-" + d;
};

// 年月日时分秒
const dateTime = function () {
    myDate = new Date();
    let h = myDate.getHours(); //获取系统时，
    let m = myDate.getMinutes(); //分
    let s = myDate.getSeconds(); // 秒
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return year + "-" + month + "-" + d + " " + h + ":" + m + ":" + s;
};

// 时间戳
const unix = function () {
    myDate = new Date();
    return myDate.getTime();
};

class toDate {
    constructor() {
        this.meTime = dateTime;
        this.meDate = date;
        this.meUnix = unix;
    }
};

export default new toDate();

// function toDate () {};

// toDate.prototype = {
//     time:dateTime,
//     date
// };

// export default {
//     time:dateTime,
//     date:date
// };