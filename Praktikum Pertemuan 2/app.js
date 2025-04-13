document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
  
    let editIndex = -1;
  
    const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
  
    const saveTasks = (tasks) => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    const renderTasks = () => {
      taskList.innerHTML = "";
      const tasks = getTasks();
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
          <p><strong>📌 Judul:</strong> ${task.judul}</p>
          <p><strong>🎬 Segmentasi:</strong> ${task.segmentasi}</p>
          <p><strong>📱 Platform:</strong> ${task.platform}</p>
          <p><strong>🗓️ Tanggal:</strong> ${task.tanggal}</p>
          <p><strong>📝 Deskripsi:</strong> ${task.deskripsi}</p>
          <p><strong>🔗 Referensi:</strong> ${task.referensi}</p>
          <p><strong>🔍 Status:</strong> ${task.status}</p>
          <div class="task-actions">
            <button onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Hapus</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    };
  
    window.editTask = (index) => {
      const tasks = getTasks();
      const task = tasks[index];
  
      document.getElementById("judul").value = task.judul;
      document.getElementById("segmentasi").value = task.segmentasi;
      document.getElementById("platform").value = task.platform;
      document.getElementById("tanggal").value = task.tanggal;
      document.getElementById("deskripsi").value = task.deskripsi;
      document.getElementById("referensi").value = task.referensi;
      document.getElementById("status").value = task.status;
  
      editIndex = index;
    };
  
    window.deleteTask = (index) => {
      const tasks = getTasks();
      if (confirm("Yakin ingin menghapus tugas ini?")) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
      }
    };
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const judul = document.getElementById("judul").value;
      const segmentasi = document.getElementById("segmentasi").value;
      const platform = document.getElementById("platform").value;
      const tanggal = document.getElementById("tanggal").value;
      const deskripsi = document.getElementById("deskripsi").value;
      const referensi = document.getElementById("referensi").value;
      const status = document.getElementById("status").value;
  
      const newTask = { judul, segmentasi, platform, tanggal, deskripsi, referensi, status };
  
      const tasks = getTasks();
  
      if (editIndex > -1) {
        tasks[editIndex] = newTask;
        editIndex = -1;
      } else {
        tasks.push(newTask);
      }
  
      saveTasks(tasks);
      renderTasks();
      form.reset();
    });
  
    renderTasks();
  });
  