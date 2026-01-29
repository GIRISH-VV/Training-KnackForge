const express = require('express')
const app = express()

const { engine } = require('express-handlebars')
const {loginPage, dashboardPage,loginProcess} = require('./Controllers/userController.js')
const path = require('path')

app.engine('hbs',engine({extname: 'hbs',defaultLayout:false}))
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded())

app.get('/',loginPage )
app.get('/dashboard',dashboardPage )
app.post('/login',loginProcess)


app.listen(8000,() =>{
    console.log('Server is running on port 8000')
})