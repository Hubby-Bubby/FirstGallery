var a = 2;
var b = "smile";
a = "Warsaw JS";
var $images = document.querySelectorAll("div img");
var $zoom = document.querySelector("div#zoom");

function printImages(){
	console.log($images);
	console.log("tandaradej");
	console.log(500000000677766+2353464654757);
}
	printImages();
function printImage(index){
	console.log($images[index]);
}
	printImage(1);
	[$images].forEach(printImage);
	printImage
	
	var names=["dom","pom","tom"];
	console.log(names);
	$images.forEach(function printImage(image){
		console.log(image);
		image.addEventListener("click", function clickHandler(event){
			var $image = document.createElement("img");
			$image.src = image.parentNode.href;
			event.preventDefault();
			console.log("mamCie",$image);
			$zoom.innerHTML="";
			$zoom.appendChild($image)	
			
		
		
		})
		
		
		
	})
	
	