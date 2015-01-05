
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 2000});

var userDb = [];
var userDbObj = userDb;
var chatHistory = [];

server.on("connection", function(connection){
	//connection.send("Connected");
	//connection.send("Type in your user name:");
	var user = {
		name: "",
		client: connection,
		hasName: false
	}
	// var start_msg = "Please enter user name";
	// connection.send(jsonifyMsg("Server", start_j_msg, false))


	user.client.on("message", function(j_message_obj){
		var message_obj = JSON.parse(j_message_obj);
		var message = message_obj.message;
		// sets the user names
		if(user.hasName === false){
			user.name = message.trim();
			userDb.forEach(function(users){
				var add = {type:"add_chat", name:users.name};
				var j_add = JSON.stringify(add);
				user.client.send(j_add);
			});
			userDb.push(user);
			//console.log(user);
			var enter_msg = " has entered the chat room";
			var j_enter_msg = jsonifyMsg(user.name, enter_msg, false);
			userDb.forEach(function(users){
				var add = {type:"add_chat", name:user.name};
				var j_add = JSON.stringify(add);
				users.client.send(j_add);
				users.client.send(j_enter_msg);
			});
			chatHistory.forEach( function(history){
				user.client.send(history);
			});
			user.hasName = true;


		// accepts and sends messenges	
		}else{


			// is the iswhisper is true, only send to name 
			if( message_obj.whisper ){
				var j_w_msg = jsonifyMsg(user.name, message_obj.message, true);
				console.log(userDb);
				console.log(message_obj.sendTo)
				userDb.forEach(function(other_users){
					if(other_users.name === message_obj.sendTo ||
						other_users.name === user.name){
						console.log(other_users.name)
						other_users.client.send(j_w_msg);
					}
				});
			

			// regular default message
			}else{
				var reg_msg = jsonifyMsg(user.name, message, false);
				userDb.forEach(function(other_users){
					//if(other_users.name != user.name){
						other_users.client.send(reg_msg);
					//}
					chatHistory.push(reg_msg);
				});



			}
		}
		console.log(message);
	});
	
	connection.on("close", function(){
		userDb.forEach(function(users){
			if(users === user){
				index = userDb.indexOf(users);
				userDb.splice(index, 1);
			}
		});
		userDb.forEach(function(users){
			var del = {type:"delete", name:user.name};
			var j_del = JSON.stringify(del);
			users.client.send(j_del);
		});
		
	});

	console.log(userDb);
});




// 
var jsonifyMsg = function(name1, msg1, wh, name2){
	var obj = {type:"msg", name:name1, msg:msg1, whisper: wh, sender:name2};
	var j_obj = JSON.stringify(obj);
	return j_obj;

}





// types of messages sent:
/* 
	Delete {type: delete, name = name}
	Add {type: add_chat, name = name}
	msg {type:"msg", name= name, msg="the message"}

	*/

/* Useless Code

//  var conversion = function(msg){
// 	var new_msg;

// 	return new_msg;
// }


// returns true if "/w" is the first word in the msg,
// false otherwise
// var isWhisper = function(msg){
// 	var split = msg.split(" ");
// 	if (split[0] === "/w"){
// 		return true;
// 	}else{
// 		return false;
// 	};
// };

// sends all other currently logged on users if
			// message only contains "/who" ---- obsolete
			// }else if(message === "/who"){
			// 	userDb.forEach(function(other_users){
			// 		var whoMsg = {type:"who", name: user.name};
			// 		user.client.send(whoMsg);
			// 	});





			// sends message in cowsay format
			// } else if( isCowsay(message) ){
			// 	var split = message.split(" ");
			// 	split.splice(0,1);
			// 	var new_msg = split.join(" ");
			// 	var cow = cowsay.say({text: new_msg});
			// 	var cow_msg = jsonifyMsg(user.name, cow_msg)
			// 	userDb.forEach(function(other_users){
			// 		//if(other_users.name != user.name){
			// 			other_users.client.send(cow_msg);
			// 		//}
			// 	});


// else{
		// 		// sends to each that the user has disconnected
		// 		var del = {type:"delete", name:user.name};
		// 		var j_del = JSON.stringify(del);
		// 		users.client.send(j_del);
		// 	}
		// });
		// returns true if "/cowsay" is the first word in msg.
// false otherwise
// var isCowsay = function(msg){
// 	var split = msg.split(" ");
// 	if(split[0] === "/cowsay"){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
*/






