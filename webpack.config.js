var config = {
   entry: './main.js',

   output: {
      path:'http://localhost:8080/asset/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
        //  port:3000
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         },

            {
             test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
      ]
   }
}

module.exports = config;
