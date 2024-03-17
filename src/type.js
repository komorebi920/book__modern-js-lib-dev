/**
 * 原理：
 * Object.prototype.toString.call([]) => "[object Array]"
 * Object.prototype.toString.call({}) => "[object Object]"
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

// 测试
console.log(type({})); // "object"
console.log(type([])); // "array"

export { type };
