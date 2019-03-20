
const data = 
	{clients:
		[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
	};

document.getElementById("clientCard").addEventListener("click",Remover);

displayClients();

function displayClients () {
	for (i=0; i<data.clients.length; i++){
		newClientCard(data.clients[i],i)
	}
}

function newClientCard (item,i){

	// Creating a new div that contains the client card
	const newCard = document.createElement("div")
	newCard.className = "cards"
	newCard.id = "cards"
	document.getElementById('clientCard').appendChild(newCard)

	// Display client info 
	const addName = document.createTextNode(item.name + " " + item.balance)
	newCard.appendChild(addName)
	const breakline = document.createElement("br")
	newCard.appendChild(breakline)
	
	// create the delete button
	createDeleteButton(newCard)
}

function createDeleteButton(div){
	const deleteButton = document.createElement("input")
	deleteButton.type = "button"
	deleteButton.value = "Delete"
	deleteButton.className = "btn btn-outline-danger"
	div.appendChild(deleteButton)
}

function Remover (a){
	const bttn = a.target
	if (bttn.parentElement.id === "cards") {
		bttn.parentElement.remove()
	}
}