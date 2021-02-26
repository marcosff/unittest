exports.start = (req, res) => {
    res.json({teste: true })
}

exports.first = (req, res) => {
    res.json({id: 1, name: 'Marcos'});
}