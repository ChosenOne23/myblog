set -e
# 构建
npm run docs:build

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:ChosenOne23/myblog.git master:gh-pages-hope

cd -
