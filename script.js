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
})