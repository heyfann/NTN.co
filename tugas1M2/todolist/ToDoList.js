// Mendapatkan elemen yang diperlukan
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Fungsi untuk menambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Tolong tambahkan kegiatan!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Tombol untuk menghapus tugas
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Hapus';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = ''; // Mengosongkan input
}

// Event listener untuk tombol "Add Task"
addTaskBtn.addEventListener('click', addTask);

// Event listener untuk menambahkan tugas dengan menekan Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
