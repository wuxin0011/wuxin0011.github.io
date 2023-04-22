#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
# npm run build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# git init
# git add -A
# git commit -m 'deploy'

# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:wuxin0011/wuxin0011.github.io.git main:blog
# git push -f git@github.com:wuxin0011/wuxin0011.github.io.git main:blog

# cd -


git add .
git commit -m 'deploy to https://wuxin0011.github.io 🎉'
git push origin blog-dev
