import index from "./src/index";

function plugin(){}

plugin.prototype = index;

export default new plugin();