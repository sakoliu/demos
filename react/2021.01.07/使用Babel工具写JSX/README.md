# 说明

## 将 JSX 添加到项目

将 JSX 添加到项目中并不需要诸如打包工具或开发服务器那样复杂的工具。本质上，添加 JSX **就像添加 CSS 预处理器一样**。唯一的要求是你在计算机上安装了 [Node.js](https://nodejs.org/)。

在终端上跳转到你的项目文件夹，然后粘贴这两个命令：

步骤 1： 执行 `npm init -y`
步骤 2： 执行 `npm install babel-cli@6 babel-preset-react-app@3`

> **提示**
> 我们**在这里使用 npm 只是用来安装 JSX 预处理器**，之后你不再需要它。React 和应用程序代码都可以继续使用 `<script>` 标签而不做任何更改。

恭喜！你刚刚为你的项目加入了一个**生产就绪（production-ready）的 JSX 配置环境。**

## 运行 JSX 预处理器

创建一个名为 `src` 的文件夹并执行这个终端命令：

```cmd
npx babel --watch src --out-dir . --presets react-app/prod
```

> 注意：
> npx 不是拼写错误 —— 它是 npm 5.2+ 附带的 package 运行工具。
>
> 如果你看到一个错误消息显示为：“You have mistakenly installed the babel package”，你可能错过了上一步。在同一个文件夹中执行它，然后重试。
