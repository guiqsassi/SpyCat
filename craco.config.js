const path = require('path');

module.exports = {

  module: {
    rules: [

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // A pasta de saída para as imagens
            },
          },
        ],
      },
    ],
  },
};