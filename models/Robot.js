const mongoose = require('mongoose')
const robotSchema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  friendly: Boolean
})

const Robot = mongoose.model('Robot', robotSchema)



module.exports = Robot
