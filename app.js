
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const models = require('./models')

app.engine('mustache',mustacheExpress())

// mustache pages will be inside the views folder
app.set('views','./views')
app.set('view engine','mustache')

app.get('/posts',function(req,res){
  models.Post.findAll().then(function(posts){
    res.render('posts',{posts : posts})
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
