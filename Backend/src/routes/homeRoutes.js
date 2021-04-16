const express = require('express');
const homeRouter = express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav){
    homeRouter.get('/',function(req,res){
        res.render('home',{
            nav,
            title: 'Library'
        });
    });

    homeRouter.post('/verify',function(req,res){
        var email =  req.body.email;
        var password = req.body.password;
        Signupdata.findOne({email: email})
        .then(function(i){
            var j = i.password;
            if(j == password){
                res.redirect('/home');
            }
            else{
                res.redirect('/invalid');
            }
        })
    });

    return homeRouter;
}

module.exports = router;