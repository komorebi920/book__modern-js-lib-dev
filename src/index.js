import { type } from "./type.js";

/**
 * 深拷贝
 */
function clone(source) {
  const t = type(source);

  if (t !== "object" && t !== "array") {
    return source;
  }

  let target;

  if (t === "object") {
    target = {};
    for (let i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]);
      }
    }
  } else {
    target = [];
    for (let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]);
    }
  }

  return target;
}

// 测试
let a = { c: 1 };
let b = clone(a);

a.c = 2;

console.log(a.c); // 输出：2
console.log(b.c); // 输出：1

export { clone };
