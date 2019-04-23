const NodeEnvironment = require("jest-environment-node")
const wdioDefaultConfig = require("./wdio.default.conf")
const remote = require("webdriverio").remote

class WdioEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)

    let wdioOpts = config.testEnvironmentOptions && config.testEnvironmentOptions.wdio || {}
    this.conf = Object.assign(wdioDefaultConfig, wdioOpts)
  }

  async setup() {
    await super.setup()

    let wdio = await remote(this.conf)

    this.wdio = wdio
    this.global.browser = wdio
    this.global.$ = wdio.$
    this.global.$$ = wdio.$$
  }

  async teardown() {
    if (this.wdio) {
      this.wdio.deleteSession
    }

    await super.teardown()
  }

}

module.exports = WdioEnvironment;
