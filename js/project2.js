var background = document.getElementById("background");
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var fader = document.getElementById("fader");
var fadeBg = document.getElementById("fadeBg");
var fadeP3 = document.getElementById("fadeP3");
var fadeP1 = document.getElementById("fadeP1");
var loadTimer = 4500;
var clicked = false;


background.addEventListener("click", function(){
	if(!clicked){
		project2.classList.add("in")
		fader.classList.add("fade");
		setTimeout(function(){
			fadeBg.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "Prattle";
			title.classList.add("linkName");
			// title.classList.add("hidden");
			title.classList.add("fadeInto")
			project2.appendChild(title);
			
			project2.classList.add("shadows");
		}, 2500);
		background.classList.add("out");
		background.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/background";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});
project1.addEventListener("click", function(){
	if(!clicked){
		project2.classList.add("in")
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP1.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "Prattle";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			project2.appendChild(title);
			project2.classList.add("shadows");
		}, 2500);
		project1.classList.add("out");
		project1.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project1";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});
project3.addEventListener("click", function(){
	if(!clicked){
		project2.classList.add("in")
		fader.classList.add("fade");
		setTimeout(function(){
			fadeP3.classList.add("fade");
			fader.remove();
			var title = document.createElement("p");
			title.innerHTML = "Prattle";
			title.classList.add("linkName");
			title.classList.add("fadeInto")
			project2.appendChild(title);
			project2.classList.add("shadows");
		}, 2500);
		project3.classList.add("out");
		project3.classList.remove("shadows");
		clicked = true;
		setTimeout(function(){
			window.location.href = "/project3";
			console.log("hey");
			return false;
		}, loadTimer);
	}
});