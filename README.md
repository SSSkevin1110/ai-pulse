由威廉完全独立创建

# AI Pulse

<div align="center">

![AI Pulse](https://img.shields.io/badge/AI-Pulse-blue?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**AI 资讯聚合平台 | AI News Aggregation Platform**

[English](#english) | [中文](#中文)

</div>

---

<a name="中文"></a>
## 🇨🇳 中文

### 📖 项目介绍

AI Pulse 是一个现代化的 AI 资讯聚合平台，致力于为用户提供最新、最全面的 AI 行业动态、技术突破和产品发布信息。通过简洁优雅的界面设计，让用户能够快速浏览和获取 AI 领域的核心资讯。

### ✨ 功能特性

- 📰 **资讯聚合** - 自动抓取和整理来自各大 AI 平台和科技媒体的最新资讯
- 🔍 **智能分类** - 按主题、来源、时间等多维度对资讯进行分类
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- ⚡ **极速加载** - 基于 Astro 的静态站点生成，首屏加载速度极快
- 🎨 **优雅界面** - 使用 Tailwind CSS 打造的现代化 UI 设计
- 🌙 **深色模式** - 支持浅色/深色主题切换

### 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| [Astro](https://astro.build/) | 高性能静态站点生成器 |
| [Tailwind CSS](https://tailwindcss.com/) | 实用优先的 CSS 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全的 JavaScript 超集 |
| [Node.js](https://nodejs.org/) | JavaScript 运行时环境 |

### 🚀 本地启动步骤

1. **克隆仓库**
   ```bash
   git clone <repository-url>
   cd ai-pulse
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或使用 yarn
   yarn install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或使用 yarn
   yarn dev
   ```

4. **访问应用**
   打开浏览器访问 `http://localhost:4321`

### 📦 部署说明

#### 构建生产版本

```bash
npm run build
# 或使用 yarn
yarn build
```

构建输出将位于 `dist/` 目录。

#### 部署到 Vercel

```bash
npm install -g vercel
vercel --prod
```

#### 部署到 Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### 部署到 Cloudflare Pages

将 `dist/` 目录上传至 Cloudflare Pages，或使用 Git 集成自动部署。

---

<a name="english"></a>
## 🇺🇸 English

### 📖 Project Introduction

AI Pulse is a modern AI news aggregation platform dedicated to providing users with the latest and most comprehensive AI industry updates, technological breakthroughs, and product release information. Through its clean and elegant interface design, users can quickly browse and access core AI news.

### ✨ Features

- 📰 **News Aggregation** - Automatically fetch and organize the latest news from major AI platforms and tech media
- 🔍 **Smart Categorization** - Classify news by topic, source, time, and other dimensions
- 📱 **Responsive Design** - Perfectly adapted for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Static site generation based on Astro for extremely fast first-screen loading
- 🎨 **Elegant UI** - Modern UI design crafted with Tailwind CSS
- 🌙 **Dark Mode** - Support for light/dark theme switching

### 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| [Astro](https://astro.build/) | High-performance static site generator |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript superset |
| [Node.js](https://nodejs.org/) | JavaScript runtime environment |

### 🚀 Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-pulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or using yarn
   yarn install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   # or using yarn
   yarn dev
   ```

4. **Access the app**
   Open your browser and visit `http://localhost:4321`

### 📦 Deployment Instructions

#### Build for Production

```bash
npm run build
# or using yarn
yarn build
```

The build output will be in the `dist/` directory.

#### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

#### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Deploy to Cloudflare Pages

Upload the `dist/` directory to Cloudflare Pages, or use Git integration for automatic deployment.

---

<div align="center">

**Made with ❤️ by AI Pulse Team**

</div>
