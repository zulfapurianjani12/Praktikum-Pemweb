const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const emptyMessage = document.createElement('p');  // Membuat elemen untuk pesan 'Masukkan tugas!'

// Load saved tasks from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (savedTasks.length === 0) {
        hideEmptyMessage();  // Jangan tampilkan pesan jika tidak ada tugas yang ditambahkan
    } else {
        savedTasks.forEach(task => {
            addTaskToList(task.text, task.completed);
        });
    }
});

// Menambahkan tugas baru
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToList(taskText);
        saveTasks();
        hideEmptyMessage();  // Sembunyikan pesan jika ada tugas yang ditambahkan
    } else {
        showEmptyMessage();  // Tampilkan pesan jika tugas kosong
    }
    taskInput.value = '';
});

// Menambahkan tugas ke list 
function addTaskToList(text, completed = false) {
    const taskItem = document.createElement('li');
    taskItem.textContent = text;
    if (completed) {
        taskItem.classList.add('completed');
    }

    // Mengubah status penyelesaian tugas setiap kali tugas tersebut diklik.
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        saveTasks();
    });

    // Menambankan delete button untuk menghapus tugas
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus item';
    deleteButton.classList.add('delete-button'); // Add a class for styling

    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        taskItem.remove();
        saveTasks();
        if (taskList.children.length === 0) {
            hideEmptyMessage();  // Sembunyikan pesan jika task list kosong
        }
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

// Menyimpan tugas ke localStorage
function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll('li');
    taskItems.forEach(taskItem => {
        const taskText = taskItem.textContent.replace('Hapus item', '').trim();
        const isCompleted = taskItem.classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Menampilkan pesan "Masukkan tugas!""
function showEmptyMessage() {
    emptyMessage.textContent = 'Masukkan tugas!';
    emptyMessage.classList.add('empty-message');  // Menambahkan class untuk styling
    if (!taskList.contains(emptyMessage)) {
        taskList.appendChild(emptyMessage); // Menambahkan pesan ke task list
    }
}

// Menyembunyikan pesan "Masukkan tugas!" 
function hideEmptyMessage() {
    if (emptyMessage.parentNode) {
        emptyMessage.parentNode.removeChild(emptyMessage); // Menghapus pesan jika ada tugas
    }
}