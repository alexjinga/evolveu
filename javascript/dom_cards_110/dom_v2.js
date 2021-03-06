
//BASIC DOM code
document.getElementById("showElem").addEventListener("click",onButtonDom);
document.getElementById("addElem").addEventListener("click",onButtonDom);
document.getElementById("clearList").addEventListener("click",onButtonDom);

function onButtonDom(e) {
	if (e.target.getAttribute("func")=== "show"){
		showHide ();
	} else if (e.target.getAttribute("func")=== "add") {
		addNewItem();
	} else if (e.target.getAttribute("func")=== "clear") {
		eraseItem();
	}else {
		return 1;
	} 
}

function eraseItem() {
	let itemNo = prompt ("enter the item number you want to remove or \"all\" to erase the entire list");
	let n = document.getElementById("orderList");
	let a = n.children;
	let a2 = a.length;
	console.log(a2);
	if (itemNo === "all") {
		document.getElementById('orderList').innerHTML = '';
	} else if (itemNo > a2) {
		alert("No such Item number! Try again!!!!");
	} else if (itemNo <= a2){
		let ilElem = document.getElementById("orderList");
		let i = itemNo-1;
		ilElem.removeChild(ilElem.children[i]);
	} else {
		return 1;
	}
}

function showHide () {
	var myList = document.getElementById("itemList");
  if (myList.style.display === "none") {
    myList.style.display = "block";
  } else {
    myList.style.display = "none";
  }
}

function addNewItem(){
	let newItem = document.getElementById("newElement").value;
	console.log (newItem);
	if (newElement.value.length === 0) {
		alert ("No new element added! Please try again!")
	} else {
		let ol = document.getElementById("orderList");
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(newItem));
		ol.appendChild (li);
		document.getElementById("newElement").value = "";
		document.getElementById("newElement").setAttribute("placeholder", "Enter the next item");
	}
}


// WORKING WITH CARDS code
var i = 0;


document.getElementById("leftSide").addEventListener("click",Listener);

function Listener (a){
	// let newDiv = createCard();
	let bttn = a.target;
	let father = bttn.parentElement;
	let buttonValue = bttn.value;
	switch (buttonValue){
		case "Add Before":  
			father.parentElement.insertBefore(newDiv, father);
			i++;
			break;
		case "Add After":
			father.parentNode.insertBefore(newDiv, father.nextSibling);
			i++;
			break;
		case "Delete":
 			bttn.parentElement.remove();
			break;
		case "Add Card":
			father.appendChild(newDiv);
			i++;
			break;
	}


function createCard() {

// creating and adding a <div></div>
	let newDiv = document.createElement("div");
	newDiv.id = "card"+i;
	newDiv.className = "cards";

// Create the Text "Card #" & break line
	createCardText (newDiv, i);

// Creating and adding "Add Before" button
	createButton(newDiv, i, "Add Before");

// Creating and adding "Add After" button
	createButton(newDiv, i, "Add After");

// Creating and adding "Delete" button
	createButton(newDiv, i, "Delete");
	
	 return newDiv;
}

function createCardText(div,index) {
	index++;
	let addText = document.createTextNode("Card "+index);
	div.appendChild(addText);
	let breakline = document.createElement("br");
	div.appendChild(breakline);
}

function createButton(div, index, txt ) {
	let addButton = document.createElement("input");
	addButton.type = "button";
	addButton.value = txt;
	addButton.id = index;
	addButton.className = "bttn"
	div.appendChild(addButton);
}

}