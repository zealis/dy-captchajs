# dy-captchajs

敦易（dunyi-captcha）前端静态资源仓库。资源经 jsdmirror 加速分发，引用格式：

```
https://cdn.jsdmirror.com/gh/zealis/dy-captchajs@main/<路径>
```

## landing/（官网落地页资源）

| 文件 | 说明 |
|---|---|
| `landing.css` | 落地页样式（自设计稿导出拆分） |
| `landing.js` | 落地页交互（双语切换、演示控制台、评分带） |
| `fonts.css` | @font-face 定义（Newsreader / Manrope / IBM Plex Mono / Noto Serif SC / Noto Sans SC），字体文件在 `fonts/` 子目录 |
| `fetch-fonts.sh` | 在 `landing/` 下执行，下载全部 229 个字体文件到 `fonts/` |
| `logo.svg` | 盾牌图标矢量版（favicon 与下载入口用） |
| `logo.png` | 盾牌图标透明 PNG（页面可见 logo 用）——**待补入**，见下 |

## 待实现方补入的二进制文件（推送通道只收文本，先行以说明交接）

1. **字体**：在 `landing/` 下执行 `sh fetch-fonts.sh`，229 个 woff2 会下到 `landing/fonts/`，与 `fonts.css` 一一对应，下完直接提交本仓库。
2. **logo.png**：主仓库 dunyi-captcha 的 `docs/landing/assets/logo.png.b64` 解码即得（`base64 -d`），放入本目录 `landing/logo.png` 提交。补入前页面 logo 有 SVG 兜底（index.html 的 onerror），不影响展示。

落地页本体 `index.html` 在主仓库 dunyi-captcha 的 `landing/` 目录，资源全部引用本仓库的 CDN 地址。
