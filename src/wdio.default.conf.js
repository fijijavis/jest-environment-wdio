module.exports = {
    host: '127.0.0.1',
    port: 4444,
    protocol: 'http',
    waitForTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    logLevel: 'debug',
    coloredLogs: true,
    capabilities: {
        browserName: 'chrome'
    }
}