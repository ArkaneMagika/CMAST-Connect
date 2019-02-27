const express = require('express')
const router = express.Router

router.use(function (req:any, res:any, next:any){
    console.log('Time accessed: ', Date.now())
    next();
})
    router.get('/', function(req:any, res:any){
        res.send("Welcome");
    })

    router.get('/events', function(req:any, res:any){
        res.send("Insert mongoose query here");
    })

    router.get('/posts', function(req:any, res:any){
        res.send("Insert mongoose query here");
    })

    router.get('/events-id', function(req:any, res:any){
        res.send();
    })

    router.get('/posts-id', function(req:any, res:any){
        res.send();
    })

module.exports = router