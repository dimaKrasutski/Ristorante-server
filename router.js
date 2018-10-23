   const Feedback = require('./models/feedback');
   const Leader = require('./models/leaders');
   const Promotion = require('./models/promotions');
   const Dish = require('./models/dishes');
   const Comment = require('./models/comments');
 const allComments = require('./allComments');
   const cors = require('cors')   

     module.exports =function(app){
       
      app.post('/feedback',cors(),function(req,res,next){   
              
        Feedback.find({},function(err,alFbs){
         
      const lastFb = alFbs[alFbs.length-1].id || 0;
         
        //console.log(lastFb)
      
        const newFeedback = new Feedback( {    
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                telnum: req.body.telnum,
                email: req.body.email,
                agree: req.body.agree,
                contactType: req.body.contactType,
                message: req.body.message,
                date: new Date().toISOString(),
               id:lastFb+1
        })
         newFeedback.save(function(err){
         })
         res.json(newFeedback)
        
        })
         })


         app.get('/leaders',cors(),function(req,res,next){
                 Leader.find({},function(err,leaders){
                    res.send(leaders)
                    })
         })

         app.get('/promotions', cors(),function(req,res,next){
          for(let i=0;i<allComments.length;i++){
            const comment = allComments[i];
            const newComment = new Comment( {    
              dishId:comment.dishId,
              rating: comment.rating,
              comment: comment.comment,
              author: comment.author,
              date: new Date().toISOString,
              id:comment.id
      })
       newComment.save(function(err){
       })
       
           }
           Promotion.find({},function(err,promotions){
             res.send(promotions)
           })
         })

         app.get('/dishes',cors(),function(req,res,next){
          Dish.find({},function(err,dishes){
            res.send(dishes)
          })
         })
         app.get('/comments',cors(),function(req,res,next){
          Comment.find({},function(err,comments){
            res.send(comments)
          })
        })
          app.post('/comments',cors(),function(req,res,next){
            Comment.find({},function(err,comments){
              const lastComment = comments[comments.length-1].id;
           
             const newCommentForDish=new Comment({
              dishId: req.body.dishId,
              rating: req.body.rating,
              author: req.body.author,
              comment: req.body.comment,
              date: req.body.date,
              id:lastComment+1
             })
             newCommentForDish.save(function(err){
            })
            res.json(newCommentForDish)
          })
         })

        }
  