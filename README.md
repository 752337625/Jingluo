# 项目介绍

待补充...

# 运行项目

- 根目录安装依赖（**请勿使用 npm 或 yarn，会被拦截**）

  ```bash
  pnpm install
  ```

- 本地调试项目

  ```bash
  cd packages/playground
  pnpm run dev
  ```

- 构建（根目录执行）
  ```bash
  pnpm run build
  ```

# 发布

本组件库采用`pnpm monorepo`框架搭建，组件包目录如下：

```text
.packages
├── playground
├── small-color-ui
└── utils
```

其中对外发布有`small-color-ui`和`utils`，`playground`则是提供给开发者的本地调试服务。

此外，发布流使用了[`changeset`](https://github.com/changesets/changesets)插件，**请按以下流程完成发布**。

## 1. 构建（根目录执行）

```bash
pnpm run build
```

## 2. 生成`changeset`文件

根目录运行，然后根据提示选取要发布的组件（除了`playground`其他都选上）。

```bash
pnpm changeset
```

## 3. 消耗`changeset`文件，生成 changelog 并更新组件 version

```bash
pnpm update:version
```

## 4. 发布组件到`npm`

```bash
pnpm release
```

## 5. 版本信息更新到 git 远程仓库

# 使用

## 1. 安装

```bash
pnpm i -S small-color-ui
```
