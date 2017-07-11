const mongoose = require('mongoose')
const godSchema = new mongoose.Schema({
  name: String,
  pantheon: String,
  friendly: Boolean
})

const God = mongoose.model('God', godSchema)

module.exports = God
