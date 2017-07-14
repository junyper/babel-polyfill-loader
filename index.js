const path = require('path')
const coreJSBuilder = require('core-js-builder')
const loaderUtils = require('loader-utils')

module.exports = function BabelPolyFillLoader () {
  this.cacheable && this.cacheable()

  const callback = this.async()

  const options = loaderUtils.getOptions(this) ||
    require(path.join(process.cwd(), 'babel-polyfill.json'))

  Promise.resolve().then(() => {
    return coreJSBuilder(options)
      .then(code => callback(null, code))
  }).catch((error) => {
    callback(error)
  })
}
