'use strict';

module.exports = function(app){
    var api = require('../controller/apiController');

    app.get('/posts', api.list_all_post)
    //api.post('/posts?id', middleware.requireUser, )
    .get(api.list_all_post)
    .post(api.create_new_post)

}