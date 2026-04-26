module.exports = function (config) {
    config.set({
        // ... your existing config ...

        browsers: ['ChromeHeadlessNoSandbox'],  // Change this line

        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage'
                ]
            }
        },
    });
};