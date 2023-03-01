const express = require('express')
const path = require('path')
const ejs = require('ejs')

const pageRoute = require('./routes/pageRoute')

const app = express()

app.set("view engine","ejs")

app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))


app.use('/', pageRoute)


const port = 3000
app.listen(port, () => {
    console.log(`App started on port ${port}`)
})