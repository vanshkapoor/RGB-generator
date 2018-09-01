var num = 6;
var colors = generaterandomcolor(num);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var newcolor = document.querySelector(".newcolor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colordisplay.textContent=pickedcolor;


easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	newcolor.classList.remove("selected");
	num = 3;
	//generate 3 colors
	colors = generaterandomcolor(num);
	//generate a random color from the 3 random colors
	pickedcolor = pickcolor();
	//display the colors
	colordisplay.textContent=pickedcolor;
	for (var i = 0; i < squares.length ;i++){
	if(colors[i]){
	squares[i].style.backgroundColor=colors[i];
    }else{
    squares[i].style.display="none";
    }
}
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected")
	hard.classList.add("selected");
	newcolor.classList.remove("selected");
	num = 6;
	//generate 3 colors
	colors = generaterandomcolor(num);
	//generate a random color from the 3 random colors
	pickedcolor = pickcolor();
	//display the colors
	colordisplay.textContent=pickedcolor;
	for (var i = 0; i < squares.length ;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].style.display="block";
    }
});

for (var i = 0; i < squares.length ;i++){
	squares[i].style.backgroundColor=colors[i];

squares[i].addEventListener('click',function(){
	var clickedcolor = this.style.backgroundColor;

	if(clickedcolor == pickedcolor){
		changecolor(clickedcolor);
		message.textContent="correct";
		h1.style.backgroundColor = clickedcolor;
		newcolor.textContent="play again?";
	}else{
		message.textContent="try again";
		this.style.backgroundColor="#232323";
	}
});
};
newcolor.addEventListener('click',function(){
	newcolor.textContent="new color";

	newcolor.classList.add("selected");
	hard.classList.remove("selected");
	easy.classList.remove("selected");

	colors = generaterandomcolor(num);
	pickedcolor = pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i = 0; i < squares.length ;i++){
	squares[i].style.backgroundColor=colors[i];
    }			
    message.textContent="";
	h1.style.backgroundColor ="steelblue" ;
});

function changecolor(color){

	for (var i = 0; i < squares.length ;i++)
	{
	squares[i].style.backgroundColor=color;
    }
}
function pickcolor(){
	var x = Math.floor(Math.random() * colors.length );
	return colors[x];
}
function generaterandomcolor(num){
var arr=[];
for(var i=0;i<num;i++){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	arr.push("rgb("+ r +", "+ g +", "+ b +")")
}
return arr;
}
