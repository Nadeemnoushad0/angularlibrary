const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            title: 'Library'
        });
    });

    signupRouter.post('/add',function(req,res){
        var item = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }  
        var signup = Signupdata(item);
        signup.save();
        res.redirect('/');   
    });

    return signupRouter;
}

module.exports = router;