module.exports = db => {
    return {
        all: (req, res, next) => {
            db.getAll().then(data => {
                res.status(200).render('./all-stories.pug', {data})
            })
        },
        new: (req, res, next) => {
            res.status(200).render('./new-story.pug', {
                sections: require('./sections.json').list
            })
        }
    }
}