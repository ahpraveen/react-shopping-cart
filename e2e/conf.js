// Sample Configuration file
exports.config={
    // The address of a running selenium server.
    seleniumAddress:'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {'browserName': 'chrome'},

    // framework to be used
    framework: 'jasmine',
    
    //Specification (test) location
    specs: ['e2etest.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    'showColors': true, // Use colors in the command line report.
  }
};