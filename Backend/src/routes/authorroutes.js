const express = require('express');
const { deleteOne } = require('../model/Authordata');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){    
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.send(authors);
        })        
    });
    
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        })        
    });

    authorRouter.get('/:id/delete',function(req,res){
        const id = req.params.id;
        Authordata.deleteOne({_id: id})
        .then(function(){
            res.redirect('/authors'); 
        });      
    });

    return authorRouter;
}


module.exports = router;