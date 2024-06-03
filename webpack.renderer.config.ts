import type { Configuration } from 'webpack';
import path from 'path';
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
rules.push(
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.vue$/,
    use: [{ loader: 'vue-loader' }]
  },
  {
    test: /\.png$/,
    type: 'asset/resource',
    generator: {
      filename: 'img/[hash][ext][query]',
    },
  },
);

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
};
