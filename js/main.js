var background = document.getElementById("background");
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var fadeBg = document.getElementById("fadeBg");
var fadeP1 = document.getElementById("fadeP1");
var fadeP2 = document.getElementById("fadeP2");
var fadeP3 = document.getElementById("fadeP3");
var loadTimer = 2000;
var clicked = false;
var host = "localhost:3000";
background.addEventListener("click", function(){
	if(!clicked){
		background.classList.add("out");
		background.classList.remove("shadows");
		fadeBg.classList.add("fade");
		clicked = true;
		// setTimeout(redirect(host + "/background"), 3000);
		setTimeout(function(){
			window.location.href = "/background";
			// console.log("hey");
			return false;
		}, loadTimer);
	}
});

project1.addEventListener("click", function(){
	if(!clicked){
		project1.classList.add("out");
		project1.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project1";
			// console.log("hey");
			return false;
		}, loadTimer);
	}
});
project2.addEventListener("click", function(){
	if(!clicked){
		project2.classList.add("out");
		project2.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project2";
			// console.log("hey");
			return false;
		}, loadTimer);
	}
});
project3.addEventListener("click", function(){
	if(!clicked){
		project3.classList.add("out");
		project3.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project3";
			// console.log("hey");
			return false;
		}, loadTimer);
	}
});
