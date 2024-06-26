const mongoose = require('mongoose')

const dburl = 'add your db link'

module.exports = () => {
    return mongoose.connect(dburl)
}