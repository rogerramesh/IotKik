'use strict';

var request = require("request");


var optionsON = {
  method : 'GET',
  url : 'http://192.168.2.211:3000/relay/power/on',
};

var optionsOFF = {
  method : 'GET',
  url : 'http://192.168.2.211:3000/relay/power/off',
}


let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'softwareswag',
    apiKey: '60aa8a40-5d38-4040-a811-7b93ddb00ade',
    baseUrl: 'https://6a327973.ngrok.io'
    // When the ngrok starts running this baseurl will change make sure your have the same baseURL as the one that is provided with ngrok
});

bot.updateBotConfiguration();

bot.onTextMessage((message,next) => {

  if (message.body.toUpperCase() == "ON"){
    request(optionsON, function (error,response,body){
      //console.log(response)
    });
  }

  if (message.body.toUpperCase() == "OFF"){
    request(optionsOFF, function (error,response,body){
      //console.log(response)
    });
  }

  //console.log(message.body)
  bot.send(message.addResponseKeyboard(["ON","OFF"],false),message.from
  );
  //return;
});




// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);
