#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 部署分支
push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=master # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

# git init
# git add -A
git add .
git commit -m "deploy, $commit_info"
# 推送到远程地址
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dist_path

# 推动本地文件修改分支
