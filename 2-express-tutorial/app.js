const express = require('express')
const app = express()



// req => middleware => res
const logger =(req,res,next)=> { 
    const { method, url } = req
    const time = new Date().getFullYear()
    console.log(method, url, time)
    res.send('testing')
    next() 
}

app.get('/',logger,(req,res)=> { 

    res.send('Home')
})

app.get('/about', (req, res) => {

    res.send('About')
})

app.listen(4000,()=> { 
    console.log("listening on port 4000 ....")
})