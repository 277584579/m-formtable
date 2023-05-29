const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    externals: {
      'ark-ui':'ark-ui',
    } 
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        javascriptEnabled: true
      }
    }
  },
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [path.resolve(__dirname, './packages/style/common.less')]
  //   }
  // },
  lintOnSave: true,
  devServer: {
    port: '10086',
    proxy: {
      '/cycms': {
        target: 'http://event.changyou.com',
        ws: true, //代理websockets
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '',
        }
      }
    },
  },
  //webpack配置节点
  configureWebpack: {
    // 路径配置
    resolve: {
      extensions: ['.ts', '.vue', '.json', '.js'],
      // 别名配置
      alias: {
        '@': resolve('examples'),
      }
    },
    // 插件配置
    plugins: [],
    // webpack-load配置
    module: {
      rules: []
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // merge(options, {
        //   includePaths: [path.resolve(dirname, 'node_modules')],
        //  })
        return options
      })
  }
}