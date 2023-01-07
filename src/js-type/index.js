

/**
 * 判断数据类型
 * @param {*} type 需要判断的字段
 * @param {*} boo 是否首字母大写
 * @returns 
 */
const typeJudge = (type, boo = false) => {
    const typeSize = Object.prototype.toString.call(type);

    let kind;

    switch (typeSize) {
        case '[object String]':
            kind = 'String'
            break;
        case '[object Number]':
            kind = 'Number'
            break;
        case '[object Boolean]':
            kind = 'Boolean'
            break;
        case '[object Object]':
            kind = 'Object'
            break;
        case '[object Array]':
            kind = 'Array'
            break;
        case '[object Null]':
            kind = 'Null'
            break;
        case '[object Undefined]':
            kind = 'Undefined'
            break;
        case '[object Function]':
            kind = 'Function'
            break;
        case '[object Date]':
            kind = 'Date'
            break;
        case '[object Symbol]':
            kind = 'Symbol'
            break;

        default:
            break;
    };

    if (boo) { // 首字母大写
        kind = kind.substring(0,1).toUpperCase() + kind.substring(1);
    }else { // 小写
        kind = kind.toLowerCase();
    }

    return kind;
};



class jsType {
    constructor() {
        this.meJstype = typeJudge;
    }
};

export default new jsType();