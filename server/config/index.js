'use strict'

/*
 * Environment mode parameters
 *
 */

const constants = require('../private.json')

module.exports = {
	development: {
		db: constants.mongodbConnection || 'mongodb://localhost:27017/db-stories',
		port: 3333
	},
	production: {
		db: constants.mongodbConnection,
		port: process.env.PORT
	}
}
