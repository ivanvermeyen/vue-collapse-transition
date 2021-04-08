let mix = require('laravel-mix')

mix.js('src/index.js', 'dist/collapse-transition.js')

mix.webpackConfig({
    output: {
        libraryTarget: 'umd',
        globalObject: 'this',
    }
})
