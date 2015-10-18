/*global require*/
var http = require('http');
var url = require('url');

function isFoodAvailable(food){
    var foodarray = ["Bananas" , "Meat" , "Beef" , "Bacon" , "Salami" , "Burgers"];
    for (var i = 0 ; i < foodarray.length ; i++){
        if (foodarray[i] === food){
            return true;
    }
    }
    return false;
}

function genRespNode(){

    this.url = '<?xml version="1.0" encoding = "UTF-8" standalone = "yes" ?> ';
    this.respopen = '<response>' ;
    this.respclose = '</response>' ;
    this.makeTag = function(data){
        return this.respopen + data + this.respclose;
    };

}


http.createServer(function(request,response){
    var path = url.parse(request.url).pathname;
    var xmlNodes = new genRespNode();

    //response.writeHead(xmlNodes.url);
        console.log("got request " + path);
    if(path !== "/") {
       if (isFoodAvailable(path.slice(1))){
         response.writeHead(200 , { "Content-Type" : "text/plain" , 'Access-Control-Allow-Origin' : '*'});
         response.end("We have got " + path.slice(1)); 
       }else{
         response.writeHead(200 , { "Content-Type" : "text/plain" , 'Access-Control-Allow-Origin' : '*'});
         response.end("We dont got " + path.slice(1));
       }
    }else{
        response.writeHead(200 , { "Content-Type" : "text/plain" , 'Access-Control-Allow-Origin' : '*'});
        response.end("Please type something!");
    }
}).listen(8001);


