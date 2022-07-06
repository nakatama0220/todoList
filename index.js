const handleClick = () => {

    const message = document.getElementById("inputTodo").value;
    const list = document.getElementById("todoList");
    const li = document.createElement('li');
    li.innerHTML = message;
    list.appendChild(li)

}
const button = document.getElementById("submitButton");
button.addEventListener('click', handleClick)