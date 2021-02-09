const path = require('path');

module.exports ={
  mode: 'development',
  entry: './src/index.js',
  output:{
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'bundle'),
  },
};