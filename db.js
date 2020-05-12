var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb://localhost/announcements', {useNewUrlParser: true, useUnifiedTopology: true});
module.exports=connection;
