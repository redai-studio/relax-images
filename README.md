# Relax Images

Image assets for Relax documentation and blog.

## Image Size Limit

Each file must be at most 500 KiB (512,000 bytes). Compress images before opening a PR; prefer SVG for diagrams and WebP for screenshots and photos while keeping labels readable.

The `check-added-large-files` pre-commit hook checks new and modified files against this limit regardless of extension. It does not compress images automatically. The Image Size Check workflow runs the same configuration against all tracked files on pull requests, pushes to `main`, merge queues, and manual dispatches. Files managed by Git LFS are excluded by the upstream hook.

## Local Checks

With [pre-commit](https://pre-commit.com/#installation) installed, enable the repository's commit hook and check existing files:

```bash
pre-commit install
pre-commit run --all-files
```

Once installed, the hook runs automatically before each commit and rejects oversized files.
