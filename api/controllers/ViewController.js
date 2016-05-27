'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  helloWorld (request, reply) {
    reply.view('index')
  }

  assets (request, reply) {
    // reply('Whaaat!')
    reply.file('dist/css/style.css')
  }

}
