var path = require('path')

function shim(name) {
    return path.resolve(__dirname, 'config', 'shims', name)
}

exports.modifyWebpackConfig = ({ config, stage }) => {
    config.merge({
        resolve: {
            alias: {
                TweenLite: 'gsap',
                TweenMax: 'gsap',
                scrollmagic: shim('scrollmagic'),
                ScrollMagic: shim('scrollmagic'),
            },
        },
    })

    return config
}

exports.modifyBabelrc = ({ babelrc }) => (
    Object.assign(
        babelrc,
        {
            plugins: babelrc.plugins.concat(
                ['transform-decorators-legacy', 'transform-regenerator']
            ),
        }
    )
)
