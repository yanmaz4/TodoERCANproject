// CODE EXPLAINED channel
// Select the elements
const cleae = document.querySelector("clear")
const dateElement= document.getElementById("date")
const list= document.getElementById("list")
const input= document.getElementById("input")

//class names
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"
// show todays date
const options = {weekdays: "long", mounth:"short",day:"numeric"}
const today = new Date()
dateElement.innerHTML= today.toLocaleDateString("en-DE",options)
//add to do function
function addToDo(toDo,id, done, trash){ 
const DONE = done ? CHECK : UNCHECK
const LINE = ? LINE_THROUGH : ""
   const item = <li class="item">

  
<i class="fa ${DONE} co" job="complete" id="0"></i>
<p class="text ${LINE}">${toDo}</p>
<i class="fa fa-trash-o de" job="delete" id="0"></i>  </li>


const position = "beforeend"
list.innerHTML(position,item)
}
document.addEventListener("keyup", function(event){
if(event.keyCode == 13){
 const toDo = input.value
// if input isnt empty
if(todo){ 
addToDo(toDo)
}
input.value= ""
}
})

//addToDo( "Coffe", 1, true, false)