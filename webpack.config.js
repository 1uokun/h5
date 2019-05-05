const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'dingdingH5.js',
        path: __dirname+'/dist',
        libraryTarget: 'umd',
        // 'library'声明全局变量
        library: 'ddH5'
    },
    devServer: {
        contentBase: __dirname+'/dist',
        compress: false,
        port: 9000,
        host: '0.0.0.0',
        hot: true
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
