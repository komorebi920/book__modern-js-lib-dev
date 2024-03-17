import { type } from "./type";

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

export { clone };
