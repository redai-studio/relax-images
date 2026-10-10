# Relax Images

Image assets for Relax documentation and blog.

## Image Size Limit

Each file must be at most 500 KiB (512,000 bytes). Compress images before opening a PR; prefer SVG for diagrams and WebP for screenshots and photos while keeping labels readable.

Run `node scripts/check-images.mjs` after staging new files to check the tracked assets locally. The Image Size Check workflow runs on pull requests, pushes to `main`, merge queues, and manual dispatches. It checks all tracked files regardless of extension and does not compress them automatically.
