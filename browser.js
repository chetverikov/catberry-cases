'use strict';

// this config will be replaced by `./config/browser.json` when building
// because of `browser` field in `package.json`
const config = require('./config/environment.json');

// catberry application
const catberry = require('catberry');
const cat = catberry.create(config);

const loggerPlugin = require('catberry-logger');
loggerPlugin.register(cat.locator);

const uhrPlugin = require('catberry-uhr');
uhrPlugin.register(cat.locator);

// starts the application when DOM is ready
cat.startWhenReady();

