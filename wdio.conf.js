exports.config = {
    
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 4,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args:             [
                'incognito',
                '--no-sandbox',
            ]
        }
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function (capabilities, specs) {
        browser.maximizeWindow()
    },
}
