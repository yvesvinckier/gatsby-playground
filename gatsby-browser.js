exports.onClientEntry = () => {
    require('gsap')
    require('whatwg-fetch')
    require('scrollmagic')
    require('gsap/src/uncompressed/plugins/ScrollToPlugin')
    if (process.env.NODE_ENV === 'development') {
        require('./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
    }
}