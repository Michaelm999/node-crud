const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000

const Robot = require('./models/Robot.js')
const God = rerquire('/models/God.js')

mongoose.connect('mongodb://localhost/irdb', function(err) {
    console.log(err || "Connected to Mongo!");
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.json({message: "Root Route."})
})


//index
app.get('/robots', function(req, res) {
  Robot.find({}, function(err, robots) {
    if(err) return console.log(err)
    res.json(robots)
  })
})

//show ONE Robot
app.get('/robots/:id', function(req, res) {
  Robot.findById(req.params.id, function(err, robot) {
    if(err) return console.log(err)
    res.json(robot)
  })
})

//create a robot
app.post('/robots', function(req, res) {
    Robot.create(req.body, function(err, savedRobot) {
      if(err) return console.log(err)
      res.json({message: "Robot saved!", robot: savedRobot})
    })
})

//update a robot
app.patch('/robots/:id', function(req, res) {
  Robot.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedRobot) {
    if(err) return console.log(err)
    res.json({message: "Robot updated!", robot: updatedRobot})
  })
})

// destroy a robot
app.delete('/robots/:id', function(req, res) {
  Robot.findByIdAndRemove(req.params.id, function(err, deletedRobot) {
    if(err) return console.log(err)
    res.json({message: "Robot Deleted...", robot: deletedRobot})
  })
})

//index
app.get('/gods', function(req, res) {
  God.find({}, function(err, gods) {
    if(err) return console.log(err)
    res.json(gods)
  })
})

//show ONE
app.get('/gods/:id', function(req, res) {
  God.findById(req.params.id, function(err, god) {
    if(err) return console.log(err)
    res.json(god)
  })
})
//create a robot
app.post('/gods', function(req, res) {
    God.create(req.body, function(err, savedGod) {
      if(err) return console.log(err)
      res.json({message: "God saved!", robot: savedGod})
    })
})

//update a robot
app.patch('/gods/:id', function(req, res) {
  God.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedGod) {
    if(err) return console.log(err)
    res.json({message: "Diety updated!", robot: updatedGod})
  })
})

// destroy a robot
app.delete('/gods/:id', function(req, res) {
  God.findByIdAndRemove(req.params.id, function(err, deletedGod) {
    if(err) return console.log(err)
    res.json({message: "God Smited...", robot: deletedGod})
  })
})





app.listen(port, function(err) {
  console.log(err || 'server running on ' + port)
})
