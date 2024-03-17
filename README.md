# book\_\_modern-js-lib-dev

《现代 JavaScript 库开发：原理、技术与实战》示例代码

- [x] 第 1 章 从零开发一个 JavaScript 库、

- [x] 第 2 章 构建

- [x] 第 3 章 测试

  - [ ] 执行 `npm run test` 会出现报错，如下图所示，暂时不知道原因，但不影响结果

  ![alt text](./doc/chapter-3/error.png)

- [ ] 第 4 章 开源

## clone

实现 JavaScript 引用类型数据的深拷贝功能

### 使用者指南

通过 `npm` 下载安装代码

```bash
$ npm install clone
```

如果使用 `node.js` 环境

```js
const { clone } = require("clone");
clone({ a: 1 });
```

如果使用 `webpack` 等环境

```js
import { clone } from "clone";
clone({ a: 1 });
```

如果使用浏览器环境

```html
<script src="node_modules/clone/dist/index.aio.js"></script>
<script>
  clone({ a: 1 });
</script>
```

### 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生产代码

```bash
$ npm run build
```

运行单元测试

```bash
$ npm test
```
