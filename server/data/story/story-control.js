'use strict'

/*
 * Message HTTP controller
 *
 */

module.exports = (stories, Model) => {
  return {
    getAll: (req, resp) => {
      try {
        return stories.getAll()
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "getAll" error: ' + error)
      }
    },
    getById: (req, resp) => {
      try {
        return stories.getById(req.params.id)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "getById" error: ' + error)
      }
    },
    post: (req, resp) => {
      console.log(req.body)

      let newModel = new Model(req.body)

      try {
        return stories.post(newModel)
          .then(data => {
            console.log('200')
            
            return resp.status(200).json(data)
          })
          .catch(err => {
            console.log(err)
            return resp.status(400).json({'error': err})
          })
      } catch (error) {
        throw new Error('Message control "post" error: ' + error)
      }
    },
    delete: (req, resp) => {
      try {
        return stories.delete(req.params.id)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "delete" error: ' + error)
      }
    },
    update: (req, resp) => {
      const id = req.params.id
      const updateObj = req.body.updateObj

      try {
        return stories.update(id, updateObj)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "update" error: ' + error)
      }
    }
  }
}