npm init -y

yarn add webpack webpack-cli webpack-dev-server -D
 yarn add webpack webpack-cli webpack-dev-server -D

"dev" 默认webpack文件

npm run dev

node src/index.js
node dist/main.js

npm run start 启动服务器

localhost:8080  并无显示

webpack.config.js  向外输出配置 plugin处理html作为首页

yarn add html-webpack-plugin -D  开发浏览

+ --open 自动打开

新建log.js编译还是错误

resolve config.js

yarn

yarn add

 yarn add babel-core babel-cli babel-preset-env -D

 npm run start

 yarn add style-loader css-loader -D

 yarn add extract-text-webpack-plugin -D

 显示源代码 么有css， 打包到js
- 无编译 不代码
    webpack 已经成为 工作流程的霸主
    vue-cli
    编译过程和js 的 promise 一样，是一个异步
    1. 代码写在 dev  src/
    2. 上线在 build dist/
    3. 启动web服务器  webpack-dev-server  将dev编译成dist 又启动web服务器
    4. 终止编译 add plugin 插件编译index.html
    5. 再启动  run start

- webpack html template plugin html-webpack-plugin 

- log 不在根目录下  怎么找到它  多写点地址./utils/log.js  alias 路径的缩写不需要写完整的路径就可以定位

- 先resolve -> 找.js因为由extnsions ->  
module  
    rules
        .js babel-loader兼容性

- webpack babel

babel-core babel-cli babel-preset-env 
babel-loader 有点兼容性问题
module 模块 babel编译  每一步一个模块
rules: [
    { test: /\.js$/,
    use: 'babel loader' }
]
resolve: {
    extensions: ['.js']
}

8080 webpack-dec-server html-webpack-plugin
template ./src/index.html

为什么能同时看到js文件，html js双剑合并
js 打包成main.js运行

模板只是首页一部分 idex.js编译成main.js webpack会塞进去
入口是.js index省略

- webpack一切皆可打包, 打包到js里
css 对于js来说就是个文本
img 对于js 打包成base64变成字符串
但是css应该独立打包，性能优化需要
main.js  显示是最慢的  分离

