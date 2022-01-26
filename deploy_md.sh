#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add docs/ package.json package-lock.json README.md deploy.sh deploy_md.sh
git commit -m 'blog_md'
git push -f git@github.com:Ryukarin/blog.git master:main


