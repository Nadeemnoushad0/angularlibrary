const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){    
    
    
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });
        })        
    });

    booksRouter.get('/:id/delete',function(req,res){
        const id = req.params.id;
        Bookdata.deleteOne({_id: id})
        .then(function(){
            res.redirect('/books'); 
        });      
    });

    return booksRouter;
}


module.exports = router;