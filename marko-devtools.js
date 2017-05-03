module.exports = function (markoDevTools) {
    markoDevTools.config.browserBuilder = {
        plugins: [
            'lasso-marko'
        ]
    };
}
