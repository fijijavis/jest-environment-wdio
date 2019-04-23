# jest-environment-wdio

[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Run WDIO Tests using Jest

** NOTE ** 
Compatible with WDIO v5 ONLY!

## Installation
NPM:
```
npm install jest-environment-wdio webdriverio --save-dev
```

Yarn:
```
yarn add jest-environment-wdio webdriverio --dev
```


## Configuration

In the ```package.json``` update the jest configuration section

```json
"jest": {
  "testEnvironment": "jest-environment-wdio",
  "testEnvironmentOptions": {
      "wdio": {
          "capabilities":{
              "browserName": "firefox"
          }
          // any wdio configuration options
      }
  }
}
```

```testEnvironmentOptions``` Default Options. Does support all WDIO Configuraiton [Options](https://webdriver.io/docs/options.html)
```javascript
{
    host: '127.0.0.1',
    port: 4444,
    protocol: 'http',
    waitForTimeout: '10000',
    connectionRetryTimeout: '90000',
    connectionRetryCount: 3,
    logLevel: 'debug',
    coloredLogs: true,
    capabilities: {
        browserName: 'chrome'
    }
}
```

## API

### `global.browser`
Access to the WDIO Browser Object

### `global.$`
Alias for findElement

### `global.$$`
Alias for findElements

From here the WDIO v5 API [documentation](https://webdriver.io/docs/api.html) takes over.

[version-badge]: https://img.shields.io/npm/v/jest-environment-wdio.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-environment-wdio
[license-badge]: https://img.shields.io/npm/l/jest-environment-wdio.svg?style=flat-square
[license]: https://github.com/fijijavis/jest-environment-wdio/blob/master/LICENSE