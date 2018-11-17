'use strict'

/*
 * App Router configuration
 *
 */

const rootResponseObject = {
    'status': 200,
    'message': 'API User connected!',
    'routes': ['/api/story'],
    'PS': 'To prettify, add /?pretty'
}

module.exports = (router, controller, collections, viewAdmin) => {

    // root route
    router.get('/', (req, resp) => {
        resp.redirect('/api')
    })

    // api route
    router.get('/api', (req, resp) => {
        console.log('API User connected!')
        resp.status(200).json(rootResponseObject)
    })

    // all existed routes
    collections.forEach(element => {
        router.get(`/api/${element}`, controller[element].getAll)
        router.get(`/api/${element}/:id`, controller[element].getById)
        router.post(`/api/${element}`, controller[element].post)
        router.put(`/api/${element}`, controller[element].update)
        router.delete(`/api/${element}`, controller[element].delete)
    })

    // admin view
    router.get('/admin', (req, resp) => {
        resp.redirect('/admin-new')
    })
    router.get('/admin-new', viewAdmin.new)
    router.get('/admin-all', viewAdmin.all)

    // all not existed routes
    router.get('*', (req, resp) => {
        resp.status(404)
    })
}