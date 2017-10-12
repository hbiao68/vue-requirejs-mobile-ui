var auth = 'logined'
module.exports = {
    verify(query) {
        var pass = true;//query.username == 'admin' && query.password == 'ab123';
        return this.render.json({
            state: pass,
            auth: pass ? auth : ''
        })
    },
    auth(query) {
        console.log(auth);
        return this.render.json(query.auth == auth)
    }
}