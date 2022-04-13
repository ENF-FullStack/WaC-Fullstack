var path = require('path');
var webpack = require('webpack');

module.exports = {
      entry: './src/app.jsx',
      mode: 'development',
      output: { path: __dirname+'/wwwroot/app', filename: 'lp.bundle.js' },
      module: {
        rules: [
          {
            test: /.jsx?$/,
                exclude: /node_modules/,
                use:{
                      loader: 'babel-loader',
                      options:{
                            presets:["@babel/env","@babel/react"]
                      }
                }
          }
        ]
      },
      resolve:{
        extensions: ['.js','.jsx']
      }
    };