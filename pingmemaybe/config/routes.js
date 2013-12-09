module.exports = function(app, passport, auth) {
    //Main route
    var index = require('../app/controllers/index');
    app.get('/', index.render);
    app.post('/check', index.check);
};
