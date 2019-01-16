let user = {
    email: 'aq@gmail.com',
    password: 'secret'
}

module.exports = {
    login
}

function login(req, res, next) {
    if(req.body.email === user.email && req.body.password === user.password) {
        return res.status(200).json({auth: true})
    } else {
        return res.status(404).json({auth: false})
    }
}