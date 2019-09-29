var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://n3m0:admin1234@cluster0-21ezb.mongodb.net/cats?retryWrites=true&w=majority');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

var Cat = mongoose.model("Cat", catSchema);

// var naruto = new Cat({
//     name: "Naruto",
//     age: 11,
//     temperment: "Hero" 
// });

// naruto.save(function(err, cat){
//     if(err){
//         console.log('something went wrong');
//     } else {
//         console.log("We just saved a cat to DB");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Sasuke",
    age: 15,
    temperment: "lightning"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log('Created a new cat to DB...');
        console.log(cat);

    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log(err);
    } else{
        console.log("all the cats");
        console.log(cats);
    }
});