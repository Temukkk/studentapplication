const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const TestModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://temuulen:04200404@cluster.9xjjo.mongodb.net/")

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    TestModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            }
            else {
                res.json("Password is incorrect")
            }
        }
        else {
            res.json("No Record Existed")
        }
    })
})

app.post('/register', (req,res) => {
    TestModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})