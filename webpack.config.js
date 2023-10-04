require('dotenv').config();
const path = require('path')
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production'

const config  = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                }
            }
        ]
    },
    plugins: [
        new Dotenv()
    ],
    devServer: {
        port: process.env.PORT,
        static: './',
        open: true
    }
}


module.exports = () => {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}