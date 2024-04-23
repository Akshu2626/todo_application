let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleCompleted(todo.id));
        const label = document.createElement('label');
        label.textContent = todo.text;
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoList.appendChild(todoItem);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const text = todoInput.value.trim();
    if (text !== '') {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        todos.push(newTodo);
        renderTodos();
        todoInput.value = '';
    }
}

function toggleCompleted(id) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed;
        renderTodos();
    }
}

function filterTodos(filter) {
    let filteredTodos = [];
    if (filter === 'all') {
        filteredTodos = todos;
    } else if (filter === 'active') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    }
    renderFilteredTodos(filteredTodos);
}

function renderFilteredTodos(filteredTodos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    filteredTodos.forEach(todo => {
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleCompleted(todo.id));
        const label = document.createElement('label');
        label.textContent = todo.text;
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoList.appendChild(todoItem);
    });
}

// Initial render
renderTodos();
