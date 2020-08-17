const todoForm = document.getElementById('todoForm'),
      todoInput = todoForm.querySelector('.mainInput'),
      todoList = todoForm.querySelector('.todoList');

// form
todoForm.addEventListener('submit', function (e) {
    let valueInput = todoInput.value,
        elementList = document.createElement("li");

    elementList.innerHTML += '<p role="textbox" contenteditable>' + valueInput + '</p>' + '<span class="delete"></span>' + '<span class="edit"></span>';
    todoList.appendChild(elementList);
    e.preventDefault();
});

// input
todoList.addEventListener('click', function (e) {
    if (!e.target.closest('span') && !e.target.closest('p')) {
        e.target.classList.toggle("completed");
    } else if (e.target.closest('span.delete')) {
        e.target.parentElement.remove();
    } else if (e.target.closest('span.edit')) {
        e.target.classList.toggle("editable");
        e.target.parentElement.querySelector('[contenteditable]').classList.toggle("editable");
        e.target.parentElement.classList.remove("completed");
        if (e.target.parentElement.querySelector('[contenteditable].editable')) {
            e.target.parentElement.querySelector('[contenteditable]').focus();
        } else {
            e.target.parentElement.querySelector('[contenteditable]').blur();
        }
    }

    e.stopPropagation();
});

document.body.addEventListener('click', function (e) {
    if (todoList.querySelector('[contenteditable].editable')) {
        todoList.querySelector('span.edit').classList.remove("editable");
        todoList.querySelector('[contenteditable]').classList.remove("editable");
    }
});