import express from 'express'

const app = express()
app.listen(5151, ()=>{
    console.log('server started at http://localhost:5151')
})