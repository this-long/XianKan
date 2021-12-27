module.exports = {
    // outputDir: 'dist',   //build输出目录
    // assetsDir: 'assets', //静态资源目录（js, css, img）
    // lintOnSave: false, //是否开启eslint
    devServer: {
        host: "localhost",
        port: '8080',
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: {
            '/api': {
                target: 'http://api.weijieyue.cn/api/', //API服务器的地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/XianKan/' : '/'
}
