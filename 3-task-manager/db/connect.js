const mongoose = require('mongoose')


const password = '12345'
const connectionString = `mongodb+srv://tuan:${password}@expressjs.bdj32yy.mongodb.net/03-TASK-MANAGER
?retryWrites=true&w=majority`
// --> database name : 03-TASK-MANAGER will be created for us.

const connectDB = (url) => {


    return mongoose
        .connect(connectionString, {
            // userNewUrlParser: true,
            dbName: '03-TASK-USER',
            // userFindAndModify: false,
            // userUnifiedTopology: true,
        })

}

// 1. set up mongoose connecttion


// 2.
// .then(res => console.log('CONNECTED TO THE DB....'))
// .catch(err => console.log(err))



// module.exports = { connectionString }
module.exports = connectDB