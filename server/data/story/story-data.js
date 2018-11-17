'use strict'

/*
 * Message data service
 *
 */

module.exports = (stories, requester) => {
    return {
        getAll: () => {
            try {
                return requester.getAll(stories)
            } catch (error) {
                throw new Error('Message date "geAll" error: ' + error)
            }
        },
        getById: (id) => {
            try {
                return requester.getById(stories, id)
            } catch (error) {
                throw new Error('Message date "geById" error: ' + error)
            }
        },
        post: (newMsg) => {
            try {
                return requester.post(stories, newMsg)
            } catch (error) {
                throw new Error('Message date "post" error: ' + error)
            }
        },
        delete: (id) => {
            try {
                return requester.delete(stories, id)
            } catch (error) {
                throw new Error('Message date "delete" error: ' + error)
            }
        },
        update: (id, updateMsg) => {
            try {
                return requester.update(stories, id, updateMsg)
            } catch (error) {
                throw new Error('Message date "update" error: ' + error)
            }
        }
    }
}