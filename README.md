# 自考英语专升本 · 阅读选择 · 在线练习

一个**纯静态**的阅读理解刷题 H5 页面，面向自考英语（专升本）阅读选择题型。
无需后端、无需构建，三个文件即可运行，可直接部署到任意静态托管（GitHub Pages / 宝塔 / Nginx / 对象存储）。

## ✨ 功能特性

- 📚 **真题题库**：覆盖 2013 年 10 月 — 2026 年 4 月，共 **26 个考期 / 130 道试题**（每期 5 题，每题 2 分）。
- 🔤 **逐句翻译**：每篇文章按句子拆分，可一键显示/隐藏中文翻译，辅助精读。
- 🔊 **逐句发音**：句子末尾喇叭按钮，支持点读；优先调用 Edge TTS Worker，自动回退浏览器内置语音。
- 🎯 **考点高亮**：每道题标注「答案来源句」，在文章中高亮定位，便于对照。
- 🗳️ **答题与解析**：选择答案即时判分，交卷后展示正确答案与详细解析。
- 📱 **移动端适配**：响应式布局，微信 / 手机浏览器可直接使用。

## 📂 文件结构

```
.
├── index.html          # 页面与全部逻辑（HTML + CSS + JS 单文件）
├── data.js             # 题库数据（考期 / 文章段落 / 试题 / 答案 / 解析 / 来源句）
└── translations.js     # 翻译数据（translationsMap[考期] = { 英文句: 中文句 }）
```

> `data.js` 与 `translations.js` 以 `<script>` 标签顺序引入，**先翻译后题库**（见 `index.html` 底部）。

## 🚀 本地运行

### 方式一：直接打开
双击 `index.html` 即可在浏览器中运行（部分浏览器对 `file://` 下的音频策略较严格，建议用方式二）。

### 方式二：本地静态服务器（推荐）
```bash
# 任选其一，在本目录执行
python -m http.server 8080
# 或
npx serve .
```
然后访问 `http://localhost:8080`。

## ☁️ 部署

将本目录三个文件上传到任意静态空间即可：
- **GitHub Pages**：推送到仓库后开启 Pages。
- **宝塔 / Nginx**：新建站点，根目录指向本目录。
- **对象存储**：上传后开启静态网站托管。

无需任何服务端代码或环境变量。

## 🔧 配置发音（TTS）

发音默认走 Edge TTS 合成服务：

```javascript
// index.html 顶部配置
const TTS_WORKER_URL = 'https://api.xiemojy.mom/v1/audio/speech';
const USE_TTS_WORKER = true; // 改为 false 则只用浏览器内置语音
```

- 若你的 TTS Worker 接口不同，修改 `TTS_WORKER_URL` 即可。
- 关闭 `USE_TTS_WORKER` 后将使用 `window.speechSynthesis`（需浏览器支持，且首次播放常需用户手势授权）。

## ➕ 新增 / 修改题库

### 新增一个考期
在 `data.js` 的 `exams` 数组追加一项：

```javascript
{
  session: '2030年4月',          // 考期名（需与 translations.js 的 key 一致）
  articleTitle: 'A Good Lesson',  // 文章标题
  articleParas: [
    { para: 0, text: '完整英文段落……' },
    { para: 1, text: '……' }
  ],
  questions: [
    {
      q: '11. 题干……',
      options: ['A. ……', 'B. ……', 'C. ……', 'D. ……'],
      answer: 3,                   // 正确选项下标，从 0 开始（此处对应 D）
      explanation: '解析……',
      sourceSentence: '答案来源句（需与文章某句完全匹配）'
    }
  ]
}
```

### 配套翻译
在 `translations.js` 的 `translationsMap` 中按考期补充逐句翻译，key 须与 `session` 完全一致：

```javascript
'2030年4月': {
  '完整英文段落……': '对应中文翻译',
  '……': '……'
}
```

> 注意：`sourceSentence` 与翻译的英文句**必须与 `articleParas` 中的文本逐字一致**，否则高亮 / 翻译无法匹配。

## 🌐 浏览器支持

| 能力 | 支持情况 |
| --- | --- |
| 页面渲染 / 答题 | Chrome / Edge / Safari / Firefox / 微信内置浏览器 ✅ |
| 浏览器内置语音 | 现代浏览器基本支持；微信需首次点击激活音频 |
| Edge TTS Worker | 取决于 `TTS_WORKER_URL` 服务可用性，失败自动回退 |

## ❓ 常见问题

- **发音没声音**：微信中需先点击一次按钮激活音频权限；或检查 `TTS_WORKER_URL` 是否可达。
- **翻译/高亮不显示**：确认 `translations.js` 的 key 与 `session`、英文句与 `articleParas` 文本完全一致。
- **双击页面被缩放**：页面已设置 `touch-action: manipulation` 关闭双击缩放，仅保留双指缩放。

## 📄 许可

本项目仅供自考英语学习交流使用，题库数据来源于历年真题，请勿用于商业用途。
