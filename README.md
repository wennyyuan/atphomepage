# Atypical Ventures 官方网站

![License](https://img.shields.io/badge/license-ISC-blue)
![Node](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)
![Express](https://img.shields.io/badge/express-4.17.1-lightgrey)

Atypical Ventures 是关注高科技中早期创业公司的风险基金官方网站。这是一个基于 Node.js、Express 和 EJS 构建的双语（中文/英文）静态网站。

## ✨ 特性

- 🌍 **双语支持** - 完整的中文（CN）和英文（EN）版本
- 🎨 **响应式设计** - 适配桌面端和移动端
- ⚡️ **实时编译** - 开发模式下支持热重载
- 🎯 **SEO 友好** - 静态 HTML 生成，利于搜索引擎优化
- 📦 **模块化数据管理** - 使用 JavaScript 对象管理网站内容
- 🚀 **简单部署** - 生成的静态文件可部署到任何静态托管服务

## 📋 目录

- [项目概述](#项目概述)
- [技术栈](#技术栈)
- [安装](#安装)
- [开发](#开发)
- [构建](#构建)
- [项目结构](#项目结构)
- [内容管理](#内容管理)
- [部署](#部署)
- [贡献](#贡献)
- [许可证](#许可证)

## 🎯 项目概述

Atypical Ventures 寓意"敢为不同"，扎根科技领域，秉持深入研究的视角和狙击手精神，服务不安于现状的卓越另类和有巨大抱负的理想主义者。

网站包含以下主要板块：
- 关于我们
- 团队介绍
- 投资组合
- 价值观
- 联系方式

## 🛠 技术栈

### 核心框架
- **Node.js** - JavaScript 运行时环境
- **Express.js** - Web 应用框架
- **EJS** - 嵌入式 JavaScript 模板引擎

### 前端技术
- **HTML5/CSS3** - 页面结构与样式
- **JavaScript (ES6+)** - 交互逻辑
- **Swiper.js** - 轮播图组件
- **jQuery** - DOM 操作

### 开发工具
- **Git LFS** - 大文件存储管理

## 📦 安装

### 前置要求

- Node.js >= 12.0.0
- npm >= 6.0.0
- Git

### 克隆仓库

```bash
git clone https://github.com/wennyyuan/atphomepage.git
cd atphomepage
```

### 安装依赖

```bash
npm install
```

## 🚀 开发

启动开发服务器，支持实时编译和热重载：

```bash
npm run dev
```

服务器将在 `http://127.0.0.1:4000` 启动，自动监听文件变化并重新编译。

访问地址：
- 中文版: http://127.0.0.1:4000/cn
- 英文版: http://127.0.0.1:4000/en
- 默认（中文）: http://127.0.0.1:4000

## 🏗 构建

生成生产环境的静态 HTML 文件：

```bash
npm run build
```

构建完成后，静态文件将生成在 `public/` 目录下：
- `public/index.html` - 默认（中文）首页
- `public/cn/index.html` - 中文首页
- `public/en/index.html` - 英文首页

## 📁 项目结构

```
atphomepage/
├── builder/              # 构建工具
│   └── index.js         # 主构建脚本
├── content/             # 网站内容数据
│   └── data.js         # 双语数据定义
├── public/              # 静态资源目录
│   ├── cn/             # 中文页面
│   ├── en/             # 英文页面
│   ├── css/            # 样式文件
│   ├── js/             # JavaScript 文件
│   ├── statics/        # 图片和其他静态资源
│   ├── template/       # EJS 模板
│   └── index.html      # 默认首页
├── scripts/            # 辅助脚本
├── doc/                # 项目文档和设计文件
├── server.js           # 简单的静态文件服务器
├── package.json        # 项目配置
├── .gitattributes      # Git LFS 配置
└── README.md           # 项目说明
```

## ✏️ 内容管理

### 数据文件结构

网站内容在 `content/data.js` 中管理，采用多语言对象结构：

```javascript
module.exports = {
    your_key: {
        cn: '中文内容',
        en: 'English content'
    }
}
```

### 修改内容

1. 编辑 `content/data.js` 文件
2. 保存后开发模式会自动重新编译
3. 刷新浏览器查看更改

### 修改模板

1. 编辑 `public/template/index.ejs` 文件
2. 使用 EJS 语法：`<%= data.your_key %>` 显示内容
3. 根据语言条件渲染：`<% if (lang === 'cn') { %> ... <% } %>`

### 图片资源

图片存放在 `public/statics/` 目录下。使用 Git LFS 管理大文件：

```bash
# 添加大文件到 LFS
git lfs track "*.psd"
git lfs track "*.ai"
```

## 🌐 部署

### 静态托管服务

构建完成后，可以将 `public/` 目录部署到：

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- **阿里云 OSS**
- **腾讯云 COS**

### 使用简单服务器

也可以使用内置的简单服务器：

```bash
node server.js
```

服务器将在 `http://127.0.0.1:4000` 启动。

### 使用 PM2（生产环境）

```bash
# 安装 PM2
npm install -g pm2

# 启动服务
pm2 start server.js --name atypical-site

# 查看状态
pm2 status

# 查看日志
pm2 logs atypical-site
```

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📝 开发规范

### 代码风格

- 使用 4 空格缩进
- 遵循 ESLint 规则
- 编写有意义的提交信息

### 提交信息格式

```
类型(范围): 简短描述

详细描述（可选）

Co-Authored-By: 姓名 <email>
```

类型：
- `feat` - 新功能
- `fix` - 修复 bug
- `docs` - 文档更新
- `style` - 代码格式调整
- `refactor` - 重构
- `test` - 测试相关
- `chore` - 构建/工具链相关

## 🔧 常见问题

### Q: 如何添加新语言？

A: 在 `builder/index.js` 中修改 `langs` 数组，添加新的语言代码：

```javascript
const langs = ['cn', 'en', 'ja']; // 添加日语
```

然后在 `content/data.js` 中为每个键添加对应的翻译。

### Q: 如何修改网站样式？

A: 编辑 `public/css/` 目录下的 CSS 文件。主要的样式文件包括：
- `pc.css` - 桌面端样式
- `mobile.css` - 移动端样式
- `index-new.css` - 首页样式

### Q: 构建失败怎么办？

A: 检查以下几点：
1. Node.js 版本是否符合要求
2. 依赖是否完整安装
3. `content/data.js` 语法是否正确
4. 模板文件是否存在

## 📧 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件
- 访问官方网站

## 📄 许可证

本项目采用 ISC 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

感谢所有为 Atypical Ventures 网站做出贡献的开发者和设计师。

---

**© 2022 Atypical Ventures. All rights reserved.**
