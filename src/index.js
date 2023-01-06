import ascii from "./ascii/index";
import character from "./character/index";
import sortSize from "./sort/size";
import sort from "./sort/index";
import deepClone from "./deep-clone/index";
import antiShake from "./anti-shake/index";
import throttle from "./throttle/index";
import deWeight from "./de-weight/index";
import getUrl from "./get-url/index";
import judgeUa from "./ua/index";
import toBase64 from "./image/to-base64";
import base64File from "./image/base64-file";
import min from "./range/min";
import max from "./range/max";
import toDate from "./date/index";

export default {
    meAscii:ascii,
    meCharacterSize:character,
    meSortSize:sortSize,
    meSort:sort,
    meDeepClone:deepClone,
    meAntiShake:antiShake,
    meThrottle:throttle,
    meDeWeight:deWeight,
    meGetUrl:getUrl,
    meTerminal:judgeUa,
    meToBase64:toBase64,
    meBase64File:base64File,
    meMin:min,
    meMax:max,
    ...toDate
}