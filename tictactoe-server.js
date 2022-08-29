var http = require('http');
var url = require('url');
var fs = require('fs');
var lastmovex = null;
var lastmoveo = null;
var turn = true;
var num = 0;
var xoro = 0;
var n = 0;
var array = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];

function handleRequest(request, response){
    var urlData = url.parse(request.url, true);
    var parameters = urlData.query;
    
    console.log("someone connected to me and wants: " + urlData.pathname);
    
    var filename = "." + urlData.pathname;
    
    
    
    
    
    switch(filename){
        case "./first":
            response.writeHead(200, {'Content-type':'text/plain'});
            if(lastmovex != null){
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridnictrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridnic";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridenatrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridena";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./griddvatrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "griddva";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridtritrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridtri";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridstiritrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridstiri";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridpettrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridpet";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridsesttrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridsest";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridsedemtrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridsedem";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridosemtrue":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmovex = "gridosem";
            if(lastmoveo != null && turn){
                lastmovex = null;
                turn = false;
                response.write(lastmoveo.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridnicfalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridnic";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridenafalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridena";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./griddvafalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "griddva";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
         case "./gridtrifalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridtri";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridstirifalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridstiri";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridpetfalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridpet";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridsestfalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridsest";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridsedemfalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridsedem";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./gridosemfalse":
            response.writeHead(200, {'Content-type':'text/plain'});
            lastmoveo = "gridosem";
            if(lastmovex != null && !turn){
                lastmoveo = null;
                turn = true;
                response.write(lastmovex.toString());
                response.end();
            } else {
                response.write("null");
                response.end();
            }
            break;
        case "./xoro":
            response.writeHead(200, {'Content-type':'text/plain'});
            if(n == 0){
                n++;
                response.write("true");
                response.end();
            } else {
                response.write("false");
                response.end();
            }
            break;
        case "./savetable.txt":  
          console.log("enter in savetable");
          console.log(request.url.substring(15));
          fs.writeFile('mynewfile3.txt', request.url.substring(15), function (err) {
              if (err) throw err;
              console.log('Saved!');
          }); 
          response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write("ok");
          response.end();
          break;
        case "./loadtable.txt":
            console.log("enter in load table");
            fs.readFile('mynewfile3.txt', function(err, data) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                console.log(data);
                response.write(data);
                response.end();
          });
          break;
        default:
            fs.readFile(filename, 
            function(error, data){
                if(error){
                    response.writeHead(404, {'Content-type':'text/html'});
                    response.write(urlData.pathname + "Not found");
                    response.end();
                } else {
                    if(/.html$/.test(filename))
                        response.writeHead(200, {'Content-type':'text/html'});
                    else if (/.css$/.test(filename))
                        response.writeHead(200, {'Content-type':'text/css'});
                    else if (/.js$/.test(filename))
                        response.writeHead(200, {'Content-type':'text/javascript'});
                    else if (/.svg$/.test(filename))
                        response.writeHead(200, {'Content-type':'image/svg+xml'});
                    else 
                         response.writeHead(200, {'Content-type':'text/plain'});
                    
                    response.write(data);
                    response.end();
                }
            
            }
        );
    }
    }
    
    
var server = http.createServer(handleRequest);
server.listen(8080);
console.log("Tic-Tac-Toe server is running");

/*http://localhost:8080/tictactoe.html*/