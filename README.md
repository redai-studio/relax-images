# Relax Images

Shared images for the [Relax documentation and blog](https://github.com/redai-studio/Relax).
Relax mounts this repository as a Git submodule at `docs/public/images/`.

## Directory conventions / 目录约定

- Blog images: `blog/<article-slug>/<image-name>.<ext>`.
- Guide images: `guide/<topic-slug>/<image-name>.<ext>`.
- Use lowercase kebab-case for directory and image names. A blog image directory
  must match the article filename without `.md`, following
  [PFCCLab's convention](https://github.com/PFCCLab/blog/blob/main/CONTRIBUTING.md).
- Reuse images across English and Chinese articles when their content is language
  independent. Use `-en` and `-zh` suffixes when the image text is translated.
- Prefer SVG for diagrams and WebP for screenshots or photographs. Keep text
  readable; compress raster images and aim for 300 KiB or less when practical.
- Only add images intended for public documentation. Keep Markdown articles in
  the Relax repository. Store new article images here; existing Relax assets do
  not need to be migrated.

博客图片放在 `blog/<文章标识>/<图片名>.<扩展名>`，指南图片放在
`guide/<主题标识>/<图片名>.<扩展名>`。目录和图片名使用小写 kebab-case，
博客图片目录与文章文件名（去掉 `.md`）一致，沿用 PFCCLab 的约定。
与语言无关的图片供中英文共用；翻译过图中文字的版本使用 `-en`、`-zh` 后缀。
示意图优先使用 SVG，截图和照片优先使用 WebP，在保证文字可读的前提下压缩，
尽量控制在 300 KiB 以内。这里只存放可以公开的文档图片，文章 Markdown 保留在 Relax；
新文章图片存入本仓库，已有图片不要求迁移。

## Referencing images / 引用图片

```markdown
![Architecture overview](/images/blog/hello-world/architecture.svg)
```

Use `/images/...` in Relax Markdown and avatar frontmatter. Do not include
`docs/public`, the GitHub raw URL, or the deployment prefix `/Relax/` in the path.
VitePress adds the deployment prefix. For Vue components, use `withBase()`.

在 Relax 的 Markdown 和头像元数据中使用 `/images/...`，不要写入 `docs/public`、
GitHub raw 地址或 `/Relax/` 部署前缀。VitePress 会补上部署前缀；Vue 组件使用 `withBase()`。

## Updating the submodule / 更新子模块

Land and push image changes in this repository first. Then update and commit
the submodule pointer together with the corresponding article changes in Relax.
The documentation build uses the pinned commit, rather than automatically
following the latest image branch.

先在本仓库提交并推送图片，再在 Relax 中更新子模块指针，与对应文章一起提交。
文档构建使用主仓库记录的固定提交，不会自动追踪图片分支的最新版本。

See [Relax's documentation guide](https://github.com/redai-studio/Relax/blob/main/docs/README.md)
for the publishing workflow.
