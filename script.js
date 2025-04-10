document.getElementById("booklist").addEventListener("submit",function(event){
event.preventDefault();

	//get input values
	const title=document.querySelector("#title").value;
	const author=document.querySelector("#author").value;
	const isbn=document.querySelector("#isbn").value;

	//validation
	if(!title || !author ||isbn){
		alert("please fill in all fields");
	    return;
	}
//selcts the table body
	const tableBody=document.querySelector("#booklist tbody");
	//create a new row
	const newRow=document.createElement("tr");
	//create and populate cell
	const cell1 = document.createElement("td");
	cell1.textContent = title;
	const cell2=document.createElement("td");
	cell2.textContent = author;
	const cell3=document.createElement("td");
	cell3.textContent = isbn;
	
	const cell4=document.createElement("td");
	const delete btn=document.createElement("button");
	deleteBtn.textContent="Delete";
	deleteBtn.classname=delete;
	deleteBtn.addEventListener("click",function()
		newRow.remove();
});
cell4.appendChild(delteBtn);
//Append cells to row
newRow.appendChild(cell1);
newRow.appendChild(cell2);
newRow.appendChild(cell3);
newRow.appendChild(cell4);
tableBody.insertBefore(newRow,tableBody.firstChild);
document.getElementById("booklist").reset();
)
	
});