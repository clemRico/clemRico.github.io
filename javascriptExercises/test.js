window.setTimeout(todoList, 3000);  // let's the html load first by delaying
//the loading time of the function

var todo = [""];

function todoList(){

do{
var choice = prompt("Whatchugado?");
if(choice === "new")
{
newTodo();
}
else if(choice === "todo")
{
printTodo();
}

if(choice === "delete"){
deleteTodo();
}
if(choice === "exit"){
  alert("bye!"); return;
}

}while(choice==="new"||choice==="todo"||choice=== "delete");
  alert("comeback again!");
  return;
}


function newTodo(){
  var item = prompt("Enter a new todo: ");
  todo.push(item); // function pushes an item at the emd of an array
}

function printTodo(){
  todo.forEach(function(print){
  console.log(print);
  });
}

function deleteTodo(){
  var item = prompt("Enter number of item to be deleted: ");
  todo.splice(item, 1);
}
