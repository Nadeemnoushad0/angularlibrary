const express = require('express');
const adminauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    adminauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library'
        });
    });

    adminauthorRouter.post('/add',function(req,res){
        var item = {
            author: req.body.author,
            des: req.body.des,
            image: req.body.image
        }  
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');   
    });

    return adminauthorRouter;
}

module.exports = router;