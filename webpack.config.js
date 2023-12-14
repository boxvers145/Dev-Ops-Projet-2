/* eslint-disable semi */
import path from 'path';

export default {
  entry: './greet.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  // Autres configurations
};
