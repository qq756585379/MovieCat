# MovieCat
### 用angularjs写的一个前端网页

先手动在项目根目录下创建src文件夹和README文件

在项目根目录下打开命令窗口，创建npm的配置文件

+  `npm init --yes` 自动生成package.json默认配置。
+  `bower init`  创建bower.json文件
+  `bower install jquery#~1.9.1 --save`
+  bower 教程：https://segmentfault.com/a/1190000002971135


+ 如果未下载全局gulp,先下载全局gulp，命令行输入`npm install -g gulp`
+ 如果已经下载全局gulp则在项目根目录下 `npm install gulp --save-dev` 单独下载下gulp并写进项目package.json文件中，别人直接clone代码后直接 `npm install` 就会自动把 package.json 中依赖的文件下载到他的本地。

+ 在项目根目录下添加一个gulpfile.js文件，这个是gulp的主文件，这个文件名是固定的。

+ 在gulpfile中抽象我们需要做的任务，在gulpfile里需要用到很多插件，我们得一个一个下载安装,用到哪些就得下载哪些

>npm install gulp-less --save-dev

>npm install gulp-concat --save-dev

>npm install gulp-uglify --save-dev

>npm install gulp-cssnano --save-dev

>npm install gulp-htmlmin --save-dev

>npm install browser-sync --save-dev

>npm install http-server --save-dev

+ 写完gulpfile文件后我们就执行gulpfile里的方法，gulp serve就会监听src下的所有文件变化，并同步到dist文件夹下。


### 在package.json中定义scripts，可以通过npm run start就会调用scripts里的prestart,postinstall,start脚本
```
"scripts": {
    "postinstall": "bower install",
    "prestart": "npm install",
    "start": "./node_modules/.bin/hs -a localhost -p 9000 -o",
    "pretest": "npm install",
    "test": "./node_modules/.bin/browser-sync start --server app --files 'src/index.html' --no-notify"
  }
```

### .editorconfig -- 统一不同开发者不同开发工具的开发配置,在sublime中使用需要安装一个EditorConfig的插件




