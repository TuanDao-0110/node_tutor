const login = async (req, res) => {
    res.send('Fake login')
}


const dashBoard = async (req, res) => {
    const luckyNum = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `hello user`, secret: `here your number: ${luckyNum}` })
}


module.exports = { login, dashBoard }