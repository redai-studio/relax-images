#!/usr/bin/env node

const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const maxBytes = 500 * 1024
const files = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' })
  .split('\0')
  .filter(Boolean)

let oversized = 0
for (const filename of files) {
  const size = fs.statSync(path.join(root, filename)).size
  if (size > maxBytes) {
    console.error(`${filename}: ${size} bytes exceeds 500 KiB`)
    oversized++
  }
}

if (oversized) {
  console.error('Compress or split oversized image assets before merging.')
  process.exitCode = 1
} else {
  console.log('Tracked files are within the 500 KiB limit.')
}
