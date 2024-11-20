// Manipulasi DOM untuk menambahkan proyek baru
document.getElementById('addProjectBtn').addEventListener('click', function () {
    // Data proyek baru
    var newProject = {
        title: 'Proyek Baru',
        description: 'Ini adalah proyek baru yang dibuat secara dinamis.',
        image: 'images/project-3.jpg' // Ganti dengan placeholder
    };

    // Membuat elemen proyek baru
    var projectList = document.getElementById('project-list');
    var projectItem = document.createElement('div');
    projectItem.className = 'project-item';

    var projectImage = document.createElement('img');
    projectImage.src = newProject.image;
    projectImage.alt = newProject.title;

    var projectTitle = document.createElement('h3');
    projectTitle.textContent = newProject.title;

    var projectDescription = document.createElement('p');
    projectDescription.textContent = newProject.description;

    // Menyusun elemen proyek baru
    projectItem.appendChild(projectImage);
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectDescription);

    // Menambahkan elemen proyek baru ke daftar proyek
    projectList.appendChild(projectItem);
});
