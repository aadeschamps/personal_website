var background = document.getElementById("background");
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var fader = document.getElementById("fader");
var fadeBg = document.getElementById("fadeBg");
var fadeP1 = document.getElementById("fadeP1");
var fadeP2 = document.getElementById("fadeP2");
var loadTimer = 4500;
var clicked = false;


project1.addEventListener("click", function(){
	if(!clicked){
		project3.classList.add("in")
		project1.classList.add("out");
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP1.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "Coming Soon";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			project3.appendChild(title);
			project3.classList.add("shadows");
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
		project3.classList.add("in")
		project2.classList.add("out");
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP2.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "Coming Soon";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			project3.appendChild(title);
			project3.classList.add("shadows");
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
background.addEventListener("click", function(){
	if(!clicked){
		project3.classList.add("in")
		background.classList.add("out");
		fader.classList.add("fade");
		setTimeout(function(){
			fadeBg.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "Coming Soon";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			project3.appendChild(title);
			project3.classList.add("shadows");
		}, 2500);
		background.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/background";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});