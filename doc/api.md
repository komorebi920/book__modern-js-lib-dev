# 文档

这是一个深拷贝库

## clone

实现数据的深拷贝

- `param {any} data` 待拷贝的数据
- `return {any}` 拷贝成功的数据

举个例子（要包含的代码用例）

```js
const data = { a: { b: 1 } }
const cloneData = clone(data)
```

特殊说明，如特殊情况下会报错等