const path = require('path')

module.exports = {
  entry: './index.js', // point d'entrée de votre application
  output: {
    filename: 'main.js', // nom du fichier de sortie
    path: path.resolve(__dirname, 'dist') // dossier de sortie
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regex pour cibler les fichiers .js
        exclude: /node_modules/, // exclure le dossier node_modules
        use: {
          loader: 'babel-loader' // utiliser babel-loader pour transpiler le code ES6+ en ES5
        }
      }
    ]
  }
}
