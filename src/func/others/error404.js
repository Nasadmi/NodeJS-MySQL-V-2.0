const error404 = (req,res) => {
    let error = new Error()
    error.status = 404
    res.render('404', {
        title: 'ContactJS'
    })
}

module.exports = error404