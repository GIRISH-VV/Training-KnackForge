const { getUser } = require('../models/userModel.js')

exports.loginPage = (req,res,next) => {
    res.render('login')
}

exports.dashboardPage = (req,res,next) => {
    res.render('dashboard')
}

exports.loginProcess = (req,res,next) => {
    //get user data - model
    const user = getUser(req.body.email)
    if(user !== null && user.password === req.body.password){
        res.redirect('dashboard')
    }
    else if(user === null){
        res.render('error'),{
            message:'No User exists with this Email'
        }
    }
}
