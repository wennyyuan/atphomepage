# Atypical Ventures 官网 - 项目状态文档

**最后更新时间**: 2026-03-05
**项目路径**: `/Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wenny_yy_aa37/msg/file/2026-03/atypical-site`
**GitHub 仓库**: https://github.com/wennyyuan/atphomepage
**生产环境**: https://www.atypical.ventures / https://atypical-site.vercel.app

---

## 项目概述

Atypical Ventures 官方网站，采用静态网站生成方式部署在 Vercel 平台。

### 技术栈
- **前端框架**: EJS 模板引擎
- **构建工具**: Node.js (builder/index.js)
- **托管平台**: Vercel
- **版本控制**: Git + GitHub
- **大文件管理**: Git LFS

---

## 项目结构

```
atypical-site/
├── builder/              # 构建工具
│   └── index.js         # 静态网站生成器
├── content/             # 内容数据
│   └── data.js         # 所有页面内容（中英文）
├── public/              # 静态资源
│   ├── template/       # EJS 模板
│   │   └── index.ejs   # 主模板文件
│   ├── statics/        # 静态资源（图片、图标等）
│   │   ├── logos/      # 投资组合公司 logo
│   │   ├── ruby.png   # Ruby 头像
│   │   ├── liuchao.png # Chao 头像
│   │   ├── shaoshuai.png # Shawn 头像
│   │   ├── wenny.jpg   # Wenny 头像（已裁剪为正方形）
│   │   ├── will.png    # Will 头像
│   │   └── ...        # 其他资源
│   ├── css/           # 样式文件
│   ├── js/            # JavaScript 文件
│   ├── cn/            # 中文版生成的 HTML
│   └── en/            # 英文版生成的 HTML
├── vercel.json         # Vercel 配置
├── package.json        # Node.js 依赖
└── README.md          # 项目说明
```

---

## 当前功能模块

### 1. **导航菜单** (PC & Mobile)
- Home
- About
- Team
- **Portfolios** ⭐ (新增)
- Values
- Contact

### 2. **Portfolios 投资组合模块** ⭐

**显示方式**:
- 与 Team 模块相同的卡片式布局
- 显示公司 logo（160x100px PC端，90x60px 移动端）
- 点击 logo 打开弹窗显示详细介绍

**包含公司** (9家):
1. Truesight - 像素蛋糕、Evoto
2. StarRocks - 镜舟科技（极速全场景 MPP 数据库）
3. 票圈视频 - 4亿+用户视频平台
4. Nextie 明日新程 - 微软小冰团队，多智能体平台
5. 鉴智机器人 PhiGent - 智驾解决方案
6. CubyFun - 智能硬件产品（前大疆团队）
7. Pyromind Dynamics - 强化学习平台
8. Dzine - AI 设计工具
9. Thunderbit - AI 网页爬虫

**Logo 显示处理**:
- 反白处理: Truesight, Thunderbit
- 保持原色: StarRocks, 票圈视频, Nextie, Pyromind Dynamics, Dzine
- CSS 类: `.img-no-filter` (禁用反白)

**弹窗样式**:
- 隐藏 logo
- 只显示文字内容（公司介绍 + 官网链接）
- 白色文字适配黑色背景

### 3. **Team 团队成员** (5人)
1. **Ruby** (卢蓉) - 创始合伙人
2. **Chao** (刘超)
3. **Shawn** (邵帅)
4. **Wenny** (袁滚滚) ⭐ (新增，替换已离职的 Wei)
5. **Will** (谢毅)

---

## 关键配置文件

### 1. 数据文件
**文件**: `content/data.js`
- 包含所有页面的中英文内容
- 团队成员信息
- 投资组合数据
- 联系方式等

**如何修改内容**:
```bash
# 1. 编辑数据文件
code content/data.js

# 2. 重新构建
npm run build

# 3. 提交到 GitHub
git add content/data.js public/cn/index.html public/en/index.html public/index.html
git commit -m "更新内容"
git push origin main
```

### 2. 模板文件
**文件**: `public/template/index.ejs`
- 控制页面结构和显示逻辑

**Portfolios 配置** (模板第 278-289 行):
```javascript
const projectConfig = {
  'Truesight': { logo: 'truesight.png', link: 'https://www.pixcakeai.com/' },
  'StarRocks': { logo: 'starrocks.svg', link: 'https://www.mirrorship.cn/' },
  '票圈视频': { logo: 'piaoquan.jpeg', link: 'https://www.piaoquantv.com/' },
  'Nextie 明日新程': { logo: 'nextie.png', link: 'https://mytuanzi.com/' },
  '鉴智机器人': { logo: 'phigent.png', link: 'https://www.phigent.ai/' },
  'CubyFun': { logo: 'cubyfun.webp', link: 'https://www.cubyfun.com/' },
  'Pyromind Dynamics': { logo: 'pyromind.jpeg', link: 'https://pyromind.ai/' },
  'Dzine': { logo: 'dzine.jpeg', link: 'https://www.dzine.ai/' },
  'Thunderbit': { logo: 'thunderbit.png', link: 'https://thunderbit.com/' }
};
```

### 3. 样式文件
- `public/css/index-new.css` - 主要样式
- `public/css/pc.css` - PC端样式
- `public/css/mobile.css` - 移动端样式

**Portfolio Logo 反白控制**:
```css
.portfolio-avatar img {
    filter: brightness(0) invert(1); /* 默认反白 */
}

.portfolio-avatar.img-no-filter img {
    filter: none; /* 保持原色 */
}
```

### 4. Vercel 配置
**文件**: `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "framework": null,
  "installCommand": "npm install"
}
```

---

## 常见操作流程

### 添加新的投资组合公司

1. **准备 Logo 文件**
   ```bash
   # 将 logo 放到 public/statics/logos/ 目录
   cp /path/to/logo.png public/statics/logos/newcompany.png
   ```

2. **更新数据文件** (`content/data.js`)
   ```javascript
   // 在 portfolios.list 数组中添加:
   {
       name: {
           cn: '公司名称',
           en: 'Company Name'
       },
       desc: {
           cn: '公司简介',
           en: 'Company description'
       },
       round: {
           cn: 'A轮',
           en: 'Series A'
       },
       status: {
           cn: '运营中',
           en: 'Operating'
       }
   }
   ```

3. **更新模板配置** (`public/template/index.ejs`)
   ```javascript
   // 在 projectConfig 中添加:
   '公司名称': { logo: 'logo.png', link: 'https://company.com' }
   ```

4. **控制 Logo 反白** (模板第 307-312 行)
   ```javascript
   const noFilter = ['票圈视频', 'Nextie 明日新程', 'Pyromind Dynamics', 'Dzine', 'StarRocks'].includes(projectName);
   // 如果不需要反白，将公司名称添加到这个数组
   ```

5. **构建和部署**
   ```bash
   npm run build
   git add -A
   git commit -m "添加新投资组合公司"
   git push origin main
   vercel --prod --yes
   ```

### 修改团队成员信息

1. **更新数据文件** (`content/data.js`)
   - 修改对应成员的 descList 或 edu_exp

2. **替换头像照片**
   ```bash
   # 新照片建议尺寸：正方形，至少 300x300px
   cp /path/to/new-photo.jpg public/statics/member.jpg

   # 如果需要裁剪为正方形
   # 可以使用预览应用或在线工具
   ```

3. **构建和部署**
   ```bash
   npm run build
   git add content/data.js public/template/index.ejs public/cn/index.html public/en/index.html public/index.html public/statics/member.jpg
   git commit -m "更新团队成员信息"
   git push origin main
   vercel --prod --yes
   ```

### 修改网站内容

**所有文本内容都在 `content/data.js` 文件中**:
- `about_1_1`, `about_1_2`, `about_1_3`: About 页面内容
- `team`: 团队成员信息
- `portfolios`: 投资组合模块
- `contact`: 联系方式
- `values`: 价值观模块

---

## Git 工作流

### 检查当前状态
```bash
cd /Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wenny_yy_aa37/msg/file/2026-03/atypical-site
git status
```

### 查看提交历史
```bash
git log --oneline -10
```

### 撤销未提交的修改
```bash
git checkout -- <file>
```

### 回退到之前的版本
```bash
# 查看历史
git log --oneline

# 回退到指定提交（会创建新提交）
git revert <commit-hash>

# 或者完全回退（谨慎使用）
git reset --hard <commit-hash>
git push origin main --force
```

---

## 部署命令

### 本地构建
```bash
npm run build
```

### 部署到 Vercel
```bash
# 生产环境
vercel --prod --yes

# 查看部署列表
vercel ls

# 查看部署日志
vercel inspect <deployment-url>
```

### 从 GitHub 自动部署
- 推送到 `main` 分支后会自动触发 Vercel 部署
- 部署状态: https://vercel.com/wennyyuans-projects/atypical-site

---

## 重要链接

- **GitHub 仓库**: https://github.com/wennyyuan/atphomepage
- **Vercel 控制台**: https://vercel.com/wennyyuans-projects/atypical-site
- **生产环境**:
  - https://www.atypical.ventures
  - https://www.atypical-vc.com
  - https://atypical-site.vercel.app
- **Git 仓库路径**: `/Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wenny_yy_aa37/msg/file/2026-03/atypical-site`

---

## 注意事项

### Git 用户配置
确保 Git 配置正确（避免部署错误）:
```bash
git config user.email
git config user.name
```

应该是:
- Email: `wennyyuan@users.noreply.github.com`
- Name: `wennyyuan`

### 文件路径注意
- **正确路径**: `/Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/...`
- **错误路径**: `/Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwebsocket_files/...`

### Git LFS
大文件（设计文件、文档等）使用 Git LFS 管理:
```bash
git lfs track "*.zip"
git lfs track "*.sketch"
git lfs track "*.docx"
git lfs track "*.psd"
git lfs track "*.ai"
```

---

## 下次继续工作的快速启动

### 1. 打开项目目录
```bash
cd /Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wenny_yy_aa37/msg/file/2026-03/atypical-site
```

### 2. 查看当前状态
```bash
git status
git log --oneline -5
```

### 3. 编辑文件
```bash
# 使用你喜欢的编辑器
code content/data.js
# 或
open content/data.js
```

### 4. 本地预览
```bash
# 开发模式（会启动本地服务器）
npm run dev

# 访问 http://127.0.0.1:4000/cn
```

### 5. 构建和部署
```bash
npm run build
git add -A
git commit -m "更新说明"
git push origin main
vercel --prod --yes
```

---

## 项目文件清单

### 核心文件（必读）
- ✅ `content/data.js` - 所有网站内容
- ✅ `public/template/index.ejs` - 页面模板
- ✅ `vercel.json` - 部署配置
- ✅ `package.json` - 项目配置

### Logo 资源
- 📁 `public/statics/logos/` - 投资组合公司 logo（9个文件）
- 🖼️ `public/statics/wenny.jpg` - Wenny 头像（已裁剪 1824x1824）
- 🖼️ `public/statics/portfolios.svg` - Portfolios 标题图标

### 样式文件
- 📄 `public/css/index-new.css` - 主要样式
- 📄 `public/css/pc.css` - PC端样式
- 📄 `public/css/mobile.css` - 移动端样式

### JavaScript 文件
- 📄 `public/js/main-new.js` - 主要交互逻辑
- 📄 `builder/index.js` - 构建工具

---

## 备份和恢复

### 完整备份
```bash
# 备份整个项目
cp -r /Users/wennyhome/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wenny_yy_aa37/msg/file/2026-03/atypical-site ~/Desktop/atypical-site-backup-$(date +%Y%m%d)
```

### Git 备份
```bash
# 推送到 GitHub（最佳备份）
git push origin main --all
```

---

## 联系信息

**域名管理**:
- atypical.ventures
- lowkeyvc.com
- atypical-vc.com
- www.atypical-vc.com

**DNS 托管**: Vercel

**邮件服务**: Feishu

---

**最后更新**: 2026-03-05
**文档版本**: 1.0
**状态**: ✅ 生产环境正常运行
