var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://n3m0:admin1234@cluster0-21ezb.mongodb.net/YelpCamp?retryWrites=true&w=majority');

// SCHEMA SETUP
var campgroundSchema  = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// ADD CAMPGROUND
Campground.create(
    {
        name: 'Konoha', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaMWi7MexcLRwS3uYfIw45irXwzu3nFvhWUJD8CAqa5SGispS'
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("New campground created...");
            console.log(campground);
        }
    });

var campgrounds = [
    {name: 'Konoha', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaMWi7MexcLRwS3uYfIw45irXwzu3nFvhWUJD8CAqa5SGispS'},
    {name: 'Sand Village', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDOatpkEstveXtwm_AgDnxNdse1EZ1ZzDd99jUngHkiolT5PY'},
    {name: 'Village of the mist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDcmG0xyhrvTUGcL_guPegvpzhKPTTWW_bEa2JrGg2Q4ZSxlY'},
    {name: 'Konoha', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaMWi7MexcLRwS3uYfIw45irXwzu3nFvhWUJD8CAqa5SGispS'},
    {name: 'Sand Village', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDOatpkEstveXtwm_AgDnxNdse1EZ1ZzDd99jUngHkiolT5PY'},
    {name: 'Village of the mist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDcmG0xyhrvTUGcL_guPegvpzhKPTTWW_bEa2JrGg2Q4ZSxlY'}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/campgrounds', function(req, res){
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

app.listen(3000, function(){
    console.log("Server running is running...");
});