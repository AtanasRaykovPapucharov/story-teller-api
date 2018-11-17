'use strict'

/*
 * Message mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        const story = new Schema({
            title: {
                type: String,
                required: false
            },
            subtitle: {
                type: String,
                required: false
            },
            category: {
                type: String,
                required: false
            },
            image: {
                type: String,
                required: false
            },
            content: {
                type: String,
                required: false
            },
            tags: {
                type: String,
                required: false
            },
            author: {
                type: String,
                default: 'Unknown'
            },
            date: {
                type: Object,
                default: new Date()
            }
        })

        const Story = mongoose.model('Story', story)

        return Story
    } catch (error) {
        throw new Error('Story model error' + error)
    }
}