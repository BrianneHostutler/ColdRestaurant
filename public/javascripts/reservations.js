var express = require('express');


/* GET users listing. */


var tableReservation = [
    {
        name: "",
        phone: ,
        email: "",
         
    }
]

var waitList = [
    {
        name: "",
        phone: ,
        email: "",
        
    }
]

app.get('/', function(req, res){
  res.send('')
})

app.get('/test', function(req, res){
  res.render('/reserve.html');
})

app.get('api/tableReservation/:people?', function(req, res){
  var chosen = req.params.people;
  console.log(chosen);

  //? makes that part not required to hit the route
  //only do this part if a :people was included in the route
  if(chosen){

    for( var i=0; i < tableReservation.length; i++){
    //if the character that was searched for is in the array
    //send back the data for that character
      if(chosen == tableReservation[i].name){
        res.json(tableReservation[i]);
        // return;
      }

    }
    res.send('No user found');

  }else { //if there was no character was searched for
    res.json(characters);
  }


})

app.get('/api/waitList/:wait?', function(req, res){
    var chosen = req.params.wait;
  console.log(chosen);
  
  if(chosen){
    for( var i=0; i < waitList.length; i++){
      //if the character that was searched for is in the array
      //send back the data for that character
      if(chosen == waitList[i].name){
      res.json(waitList[i]);
      return;
      }
    } 
    res.send('No system found');  
  }else { //no particular system was searched for
    res.json(waitList);
  }
  
})

app.post('/tableReservation/new', function(req, res){
  var newUser = req.body;

  console.log(newUser);

  //take in the character from the post request
  //add it to the characters array
  tableReservation.push(newUser);
  
  // res.json(newUser);
  res.render('')
})

module.exports = reservations;
