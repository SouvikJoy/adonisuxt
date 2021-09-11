import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'
const { loadNuxt, build } = require('nuxt')

const isDev = process.env.NODE_ENV !== 'production'

async function start () {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  if (isDev) {
    build(nuxt)
  }
}

sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname).httpServer().start()

start()
