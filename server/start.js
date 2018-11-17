'use strict'

/*
 * Express server main file
 *
 */

module.exports = () => {
    try {

        // App Server
        const express = require('express')
        const server = express()

        // App Environment Mode
        const env = process.env.NODE_ENV || 'development'

        // App Constants
        const params = require('./config')[env]

        // Express configuration
        require('./config/express')(express, server)

        // Database
        const mongoose = require('mongoose')
        const mongoConnection = params.db
        const collections = ['story']

        const dbRequester = require('./services/db-requester')

        // Mongoose configuration
        require('./config/mongoose')(mongoose, mongoConnection)

        // Main data object
        const db = {}

        collections.forEach(element => {
            const modelPath = `./data/${element}/${element}-model`
            const dataPath = `./data/${element}/${element}-data`
            const model = require(modelPath).init(mongoose)

            db[element] = require(dataPath)(model, dbRequester)
            db[`${element}Model`] = model
        })

        // Main controller object
        const controller = {}

        collections.forEach(element => {
            controller[element] = require(`./data/${element}/${element}-control`)(db[element], db[`${element}Model`])
        })

        const viewAdmin = require('./admin/view')(db['story'])

        // Routing configuration
        require('./config/routes')(server, controller, collections, viewAdmin)

        // Request listener
        const port = params.port

        server.listen(port, () => {
            console.log(`🌎  Server is running on port ${port} `)
        })

        // For testing purposes
        return {
            server,
            db,
            controller
        }
    } catch (error) {
        throw new Error('Server start error: ' + error)
    }
}