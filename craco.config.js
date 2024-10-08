const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
                '@linaria',
              ],
            },
          },
          {
            loader: '@wyw-in-js/webpack-loader', //핵심
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              babelOptions: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};

// module.exports = {
//   plugins: [{ plugin: require('craco-linaria') }],
// };

// const { resolve } = require('path');
// const { BabelMultiTargetPlugin } = require('webpack-babel-multi-target-plugin');

// module.exports = {
//   webpack: {
//     plugins: [
//       new BabelMultiTargetPlugin({
//         babel: {
//           plugins: ['@linaria']
//         }
//       })
//     ]
//   }
// };
