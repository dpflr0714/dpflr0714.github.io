	const gridContainer = document.getElementById("gridContainer");

	function makeGrids(rows, cols){
		gridContainer.style.setProperty('--grid-rows', rows);
		gridContainer.style.setProperty('--grid-cols', cols);
		for (let i = 0; i < (rows * cols); i++){
			let grids = document.createElement("div");
			gridContainer.appendChild(grids).className = "gridItems"
		}
		let gridVar = document.getElementsByClassName("gridItems");

		for (let i = 0; i < gridVar.length; i++){
			gridVar[i].addEventListener('mouseenter', function(event){
				event.target.style.backgroundColor = "black";}, false);
		}
	}
/* Future feature
	let cells = gridVar
	function clickToggle(){

		gridVar.classList.toggle("gridItems");

	}
*/



	function hoverFunction(e) {
		e.target.style.backgroundColor = "red";
		//this.setAttribute("style" , "background-color: " + "red" + ";" );

	}

	function deleteGrids(){
		let deletedGrids = document.getElementsByClassName("gridItems");

		while(deletedGrids[0]){
			deletedGrids[0].parentNode.removeChild(deletedGrids[0]);
		}
		
	}

	function colorSetter(e){
		document.getElementById("colorInput").value = e;

	  	return document.getElementById("colorInput").value.toString();
	}

	function newColor(colorValue){

	  	let gridVar = document.getElementsByClassName("gridItems");

		for (let i = 0; i < gridVar.length; i++){
			gridVar[i].addEventListener('mouseenter', function(event){
				event.target.style.backgroundColor = colorSetter(colorValue);}, false);
		}
	}

	function randomColor(){

		let gridVar = document.getElementsByClassName("gridItems");

		for (let i = 0; i < gridVar.length; i++){
			gridVar[i].addEventListener('mouseenter', function(event){
				event.target.style.backgroundColor = colorGenerator();}, false);
		}
	}

	function colorGenerator(){
		let rColor = Math.floor(Math.random()*16777215).toString(16);
		return "#" + rColor
	}
/*  Future feature
	function grayScale(){

		let gridVar = document.getElementsByClassName("gridItems");

		for (let i = 0; i < gridVar.length; i++){
			gridVar[i].addEventListener('mouseenter', function(event){
				event.target.style.backgroundColor = grayIncrement();}, false);
		}

	}

	function grayIncrement(){
		rgb(value,value,value)
		if (value !== 0){
			value -= 25;
		} else {
			return 0;
		}

		return rgbvalue
	}
*/

	function twoCalls(a){
		deleteGrids();
		makeGrids(a,a);
}

makeGrids(50,50);

const clearButton = document.querySelector('#clearBtn');

clearButton.addEventListener('click', (event) => {
	
	let gridVar = document.getElementsByClassName("gridItems");
	
	for (let i = 0; i < gridVar.length; i++){
		gridVar[i].setAttribute("style", "background-color: white;");
	}

});

const rgbButton = document.querySelector('#randomRGB');

rgbButton.addEventListener('click', (event) => {

	randomColor();

});