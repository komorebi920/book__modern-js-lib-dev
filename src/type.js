/**
 * 原理：
 * Object.prototype.toString.call([]) => "[object Array]"
 * Object.prototype.toString.call({}) => "[object Object]"
 * @example type({}) => "object"
 * @example type([]) => "array"
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

export { type };
