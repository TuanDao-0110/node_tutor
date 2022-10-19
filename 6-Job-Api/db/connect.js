const mongoose  = require('mongoose')

const connectBD = (url)=> { 
    return mongoose
        .connect(url, {
            userNewUrlParser: true,
            // where to locate database from clust
            dbName: '06-TASK',
            // userFindAndModify: false,
            useUnifiedTopology: true 
        })
}


module.exports = connectBD