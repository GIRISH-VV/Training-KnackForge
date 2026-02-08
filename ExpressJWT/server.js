import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import {posts} from './posts.js'

app.use(express.json())

app.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post => post.username === req.user.name))
})

// app.post('/login',(req,res)=>{
//     const username  = req.body.username
//     const user = {name:username} //Payload - Stores inside JWT

//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)   //(serializer,SECRET KEY in .env)
//     res.json({accessToken : accessToken})
// })

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)   return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) =>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})