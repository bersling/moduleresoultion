module.exports = {
   entry: './ts/index.ts',
   devtool: 'source-map',
   output: {
   filename: './js/index.js',
   path: __dirname
 },
 module: {
   rules: [
      {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
      }
   ]
 },
 resolve: {
    extensions: [".tsx", ".ts", ".js"]
 }
};


