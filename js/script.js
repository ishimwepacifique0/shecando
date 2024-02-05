const addPizzaBtn = document.getElementById('submitButton');
addPizzaBtn.addEventListener('click', function () {
    const pizzaName = document.getElementById('name');
    const piname = pizzaName.value.trim()
    saveLocalTodo(piname)

});
function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos") ===  null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
 }