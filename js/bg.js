var background = document.getElementById("background");
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var fader = document.getElementById("fader");
var fadeP1 = document.getElementById("fadeP1");
var fadeP2 = document.getElementById("fadeP2");
var fadeP3 = document.getElementById("fadeP3");
var loadTimer = 4500;
var clicked = false;


project1.addEventListener("click", function(){
	if(!clicked){
		background.classList.add("in");
		project1.classList.add("out");
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP1.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "About Me";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			background.appendChild(title);
			background.classList.add("shadows");
		}, 2500);
		project1.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project1";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});
project2.addEventListener("click", function(){
	if(!clicked){
		background.classList.add("in");
		project2.classList.add("out");
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP2.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "About Me";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			background.appendChild(title);
			background.classList.add("shadows");
		}, 2500);
		project2.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project2";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});
project3.addEventListener("click", function(){
	if(!clicked){
		background.classList.add("in")
		project3.classList.add("out");
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP3.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "About Me";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			background.appendChild(title);
			background.classList.add("shadows");
		}, 2500);
		project3.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project3";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});