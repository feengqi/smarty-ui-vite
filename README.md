## 2 `MVP` 原型系统： 将组件封装为组件库

- 如何使用 `Vite` 从零搭建 `Vue` 开发环境 ？
- 如何让 `Vite` 支持 `SFC` ( `Vue` 单文件) 与 `JSX` 语法 ？
  - 支持 `SFC` ：`@vitejs/plugin-vue`
  - 支持 `JSX` ：`@vitejs/plugin-vue-jsx`
- 组件库的封装形态是什么样子 ？
  - 默认导出为 Vue 插件；
  - 每个组件可以单独导出。
- 如何使用 `Vite` 完成库文件的构建 ？
  - vite.config.ts 配置文件 build.lib 配置项
    [`cn.vitejs.dev`](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vitejs.dev%2Fconfig%2Fbuild-options.html%23build-lib)

## 3 `CSS` 样式：用 `UnoCSS` 实现原子化 CSS

- 1. `Tailwind` 与 `UnoCSS` 的关系 ？

  - 共同点：都是 `AtomicCSS`；
  - 不同点：`UnoCSS` 性能更好有更强的可定制性和易用性

- 2.怎样在 `UnoCSS` 中使用变量定制样式 ？

  - （1）首先需要定义组件的属性类型，变量和组件属性关联
  - （2）使用字符串拼接的方法将变量拼接到样式属性中
  - （3）变量的取值添加到 `Safelist` 中去

- 3.怎样在 `UnoCSS` 中引入字体图标 ？
  - （1）首先在 `Unocss` 插件中添加 presetIcons 预设
  - （2）需要将使用的图标名加入到 `safelist` 中

ps: 可以在 [`iconfy`](https://icones.js.org/) 上面搜索心仪的图标

## 4 文档建设：创建具备 `Demo` 示例功能的文档网站

- 1.如何配置 `Vitepress` 完成文档建设 ？
  - （1）首先需要引入 `Vitepress` 文档 （ `pnpm install` ...）
  - （2）新建 `.docs` 文件夹，配置 `Vitepress` 的 `vite.config.ts`
  - （3）在 `.docs` 根目录下，创建首页文档（ `index.md` ）
  - （4）增加启动脚本
- 2.如何在 `vitepress` 中引用 `vue` 组件？
  - （1）通过编写一个主题 `theme` 就可以获取 vue 实例。
  - （2）只需要在 `enhanceApp` 方法中注册组件库插件就可以了。
- 3.什么是 `markdown` 插槽 ？
  - 来实现同时显示 `Demo` 与代码的
    ::: `slot name mrrkdown` 语法的一些内容
    :::

## 5 单元测试(一)： 使用 Jest 进行前端单元测试

- 1.断言、分组都是什么？
  - （1）用断言来表示测试是否通过，断言正确就代表测试通过 ，如果错误代表不通过；
    断言的形式： expect（运行结果）.toBe（期望结果）
  - （2）使用 describe 建立一个 测试分组，一个分组中可以有多个 test 函数；
    每一个 test 函数都是一个测试 case
- 2.Mock 函数的使用场景是什么？
  - 模拟网络请求
- 3.如何使用 DOM 仿真进行前端测试？
  - （1）由于在 node 环境中没有 dom, 所以需要用 dom 仿真模拟一个 dom 对象
  - （2）可以使用 jsdom 进行 dom 仿真 使用步骤如下：
    - （2.1）pnpm i jsdom -D
    - （2.2）编写 jsdom-config.js 配置文件
    - （2.3）编写被测试函数，函数中创建一个 dom 元素
    - （2.4）编写测试用例测试 dom 元素

## 6 单元测试 (二)： 搭建 Vitest 的单元测试环境

- 1.如何配置 Vitest 环境？
  - `pnpm i -D vitest@0.21.1 happy-dom@6.0.4 @vue/test-utils@2.0.2`
- 2.如何使用 `@vue/test-utils` 完成 `Vue3` 项目的测试？
  - （1）使用 `@vue/test-utils` 提供的 `shallowMount` 初始化组件
  - （2）以 `Button` 组件为例，在初始化组件时可以传默认插槽（按钮文字）；颜色大小等属性
  - （3）测试按钮文字，颜色大小等属性
