var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
	var noResp = true;
	var path = request.url;
	var split = path.split("/");
	split.splice(0,1);
	console.log(split);
	if(path === "/"){
		fs.readFile("html/index.html" , function(err,data){
			if(err){
				console.log("error");
			}else{
				// console.log("hey");
				var text = data.toString();
				response.end(text);
			}
		});
	}else if(split[0] === "assets"){
		var img = fs.readFileSync("assets/" + split[1]);
	    response.writeHead(200, {'Content-Type': 'image/gif' });
	    response.end(img, 'binary');
	}else if(split[0] === "favicon.ico"){ 
		fs.readFile("favicon.ico" , function(err,data){
			if(err){
				response.end("404 Error");
			}else{
				// console.log("hey");
				var text = data.toString();
				response.end(text);
			}
		});
	}else if(split[0] === "css"){
		fs.readFile("css/" + split[1], function(err,data){
			if(err){
				response.end("404 Error");
			}else{
				// console.log("hey");
				var text = data.toString();
				response.end(text);
			}
		});
	}else if(split[0] === "js"){
		fs.readFile("js/" + split[1], function(err,data){
			if(err){
				response.end("404 Error");
			}else{
				// console.log("hey");
				var text = data.toString();
				response.end(text);
			}
		});
	} else {
		fs.readFile("html/" + split[0] + ".html", function(err,data){
			if(err){
				response.end("404 Error");
			}else{
				// console.log("hey");
				var text = data.toString();
				response.end(text);
			}
		});
	}
	
});

server.listen(3000);