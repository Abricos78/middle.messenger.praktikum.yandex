const { JSDOM } = require('jsdom')
const Handlebars = require('handlebars')
const fs = require('fs')
const crypto = require('crypto')

const { window } = new JSDOM('<div id="add"></div>', { url: 'http://localhost:3000' })

global.window = window
global.document = window.document
global.DocumentFragment = window.DocumentFragment
global.crypto = crypto

require.extensions['.hbs'] = function (module, filename) {
    const contents = fs.readFileSync(filename, 'utf-8')

    module.exports = Handlebars.compile(contents)
}

require.extensions['.scss'] = function () {
    module.exports = () => ({})
}
