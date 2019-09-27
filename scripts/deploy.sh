# 发布

# _删除_deployme目录下所有文件
rm -rf _deployme
mkdir _deployme

# 构建项目
sh scripts/build.sh

# 使用js压缩工具uglifyjs对文件压缩，安装命令 uglifyjs npm install uglifyjs -g
uglifyjs bundle.js -o _deployme/bundle.js

# 压缩css文件,下面的命令有点问题
# cssshrink bundle.css > _deployme/bundle.css 命令有问题，原因未知

# 将html和图片复制到_deployme文件下
cp bundle.css _deployme/bundle.css

cp index.html _deployme/index.html
cp -r images/ _deployme/images/
date;echo;