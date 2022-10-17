const notFound = (req, res) => res.status(404).send('Route doesnt exits')
module.exports = notFound