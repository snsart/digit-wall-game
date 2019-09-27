# 使用babel将js/scorce中的es6语法文件转译为es5,并对jsx语法进行转译，将转译后的文件存入js/build文件下
babel --presets react,es2015 js/source -d js/build

# 对app.js文件打包,browserify会找出discover.js中所有的依赖，并输出到bundle.js中
browserify js/build/discover.js -o bundle.js

browserify js/build/discover.js -o discover-bundle.js

# 合并css文件夹下的所有文件并输出到bundle.css，使用sed命令替换图像路径
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' >bundle.css
date;echo;