const DotEnvPlugin = require('webpack-dotenv-plugin')
const { DefinePlugin } = require('webpack')
const  blackListRemover = require('../../src/utils/blackListRemover');

class DotEnv {
  constructor(path = './.env', blacklist = ['example']) {
    this.path = path
    this.blacklist = blacklist
    const env = this.envParser()

    /* Remove blacklist keys */
    blackListRemover(env, this.blacklist);

    /* Strinfigy process.env items in case there is no blacklisted items there */
    Object.keys(process.env).forEach(key => {
      if (this.blacklist.indexOf(key) === -1) {
        env[key] = JSON.stringify(process.env[key])
      }
    })

    return new DefinePlugin({
      'process.env': env,
    })
  }

  envParser() {
    try {
      /* DotEnvPlugin: Reads, parses and exports the listed env vars from .env */
      return new DotEnvPlugin({ sample: '', path: this.path })
    } catch (e) {
      /* eslint-disable no-console */
      console.warn(`Failed to load ${this.path}.`)
      return {}
    }
  }
}

module.exports = DotEnv
