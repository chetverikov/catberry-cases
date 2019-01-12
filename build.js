'use strict';

// configuration
const isRelease = process.argv.length === 3 ?
	process.argv[2] === 'release' : undefined;

// catberry application
const catberry = require('catberry');
const cat = catberry.create({isRelease});

const logger = require('catberry-logger');
logger.register(cat.locator);

// run the build
cat.build();

