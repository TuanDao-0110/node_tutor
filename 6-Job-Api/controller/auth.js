// 1 this is where we send data from server

const register = async (req, res) => {
    res.send('register user')
}


const login = async (req, res) => {
    res.send('login user')
}


module.exports = { login, register }