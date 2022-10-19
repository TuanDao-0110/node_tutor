const errHandler = async (req, res) => {
    return res.status(404).json({ msg: 'Wrong router' })
}


module.exports = errHandler