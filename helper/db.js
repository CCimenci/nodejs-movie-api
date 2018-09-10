const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect('mongodb://movie_user:123456a@ds151282.mlab.com:51282/movie-api',{useNewUrlParser: true});
    mongoose.connection.on ('open',() =>{
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on ('error',(err) =>{
        console.log('MongoDB: Error',err);
    });
};