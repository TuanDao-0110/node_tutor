const notFound =(req,res)=> { 
    return res.status(404).send('router does not exist')
}


module.exports = notFound