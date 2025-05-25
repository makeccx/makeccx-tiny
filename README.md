# makeccx-tiny

😎 极小版 makeccx ，仅压缩 `src` 文件夹，几乎相当于没有框架，基于 Python 3 实现。

> ✅ 开发环境占用小  
> ✅ 打包速度快  
> ✅ 支持 JSDoc 类型提示  
> ❌ 不支持 `require("clipcc-extension")`，需用 `self.ClipCCExtension` 代替  
> ❌ 不支持 多个 JS 文件  
> ❌ 不支持 语言文件特殊写法  
> ❌ 不支持 node_modules  
> ❌ 不支持 TypeScript（可以用 JSDoc 代替）  
> ❌ 不支持 ES Module 语法  
> ❌ 不支持 语法检查  
> ❌ 不支持 Minify（压缩 JS 文件）  
> ❌ 不支持 `makeccx.config.ts`  
> ❌ 不支持 `makeccx.config.js`

## 开始

> 1. 确保已安装 [Python 3](https://www.python.org)
> 2. 下载 zip: https://github.com/makeccx/makeccx-tiny/archive/refs/heads/main.zip
> 3. 创建文件夹，例如 `clipcc-extension-example`
> 4. 解压到文件夹里
> 5. 使用 [VSCode](https://code.visualstudio.com) 打开文件夹
> 6. 修改 `src/info.json` 和 `src/main.js`
> 7. 新建终端，运行命令 `./makeccx`
