var Encore = require('@symfony/webpack-encore');
Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .enableVueLoader()
    .enableSassLoader()
    .addEntry('js/client', './assets/js/client.js')
    .addEntry('js/server', './assets/js/server.js')

    .configureBabel(function(babelConfig) {
        babelConfig.plugins = ["transform-object-rest-spread"]//, "vue-material"]
    })
;

module.exports = Encore.getWebpackConfig();

