document.addEventListener("DOMContentLoaded",function(){
console.log("DOM fully loaded and parsed");
    document.getElementById("booklist").addEventListener("submit",function(event){
        event.preventDefault();
        console.log("Form submission prevented");
        
            //get input values
            const title=document.querySelector("#title").value;
            const author=document.querySelector("#author").value;
            const isbn=document.querySelector("#isbn").value;
        
            console.log("Title:",title,"Author",author,"ISBN:",isbn);
            //validation
            if(!title || !author || !isbn){
                alert("please fill in all fields");
                return;
            }
        //selcts the table body
            const tableBody=document.querySelector("#book-list tBody");
            
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
            const deleteBtn=document.createElement("button");
            deleteBtn.textContent="X";
            deleteBtn.className="delete";
            deleteBtn.addEventListener("click",function(){
                newRow.remove();
                });
        cell4.appendChild(deleteBtn);
        //Append cells to row
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        tableBody.appendChild(newRow);
        document.getElementById("booklist").reset();
            });
        });