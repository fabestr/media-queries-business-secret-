



var linkHome = document.querySelector('header nav li:first-child a');
var linkAbout = document.querySelector('header nav li:nth-child(2) a');
var linkService = document.querySelector('header nav li:nth-child(3) a');
var linkSolution = document.querySelector('header nav li:nth-child(4) a');
var linkContact = document.querySelector('header nav li:last-child a');


linkHome.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('.theme').href='css/styleHome.css';
});

linkAbout.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.theme').href='css/styleAbout.css';
});

linkService.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.theme').href='css/styleService.css';
});

linkSolution.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.theme').href='css/styleSolution.css';
});

linkContact.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.theme').href='css/styleContact.css';
});

