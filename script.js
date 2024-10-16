document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    
    // Membuat elemen container utama
    const container = document.createElement('div');
    container.classList.add('container');
    
    // Membuat judul
    const title = document.createElement('h1');
    title.innerText = 'Tugas-2 Praktikum Pemrograman Web';
    container.appendChild(title);

    // Membuat form container
    const formContainer = document.createElement('div');
    formContainer.id = 'formContainer';
    formContainer.classList.add('card');

    const form = document.createElement('form');
    form.id = 'studentForm';

    // Membuat input Nama
    const nameFormGroup = document.createElement('div');
    nameFormGroup.classList.add('form-group');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'username');
    nameLabel.innerHTML = '<i class="fas fa-user"></i> Nama Anda';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'username';
    nameInput.name = 'username';
    nameInput.required = true;
    nameFormGroup.appendChild(nameLabel);
    nameFormGroup.appendChild(nameInput);
    form.appendChild(nameFormGroup);

    // Membuat input NIM
    const nimFormGroup = document.createElement('div');
    nimFormGroup.classList.add('form-group');
    const nimLabel = document.createElement('label');
    nimLabel.setAttribute('for', 'nim');
    nimLabel.innerHTML = '<i class="fas fa-id-card"></i> NIM';
    const nimInput = document.createElement('input');
    nimInput.type = 'text';
    nimInput.id = 'nim';
    nimInput.name = 'nim';
    nimInput.required = true;
    nimFormGroup.appendChild(nimLabel);
    nimFormGroup.appendChild(nimInput);
    form.appendChild(nimFormGroup);

    // Membuat input KOM
    const komFormGroup = document.createElement('div');
    komFormGroup.classList.add('form-group');
    const komLabel = document.createElement('label');
    komLabel.setAttribute('for', 'kom');
    komLabel.innerHTML = '<i class="fas fa-users"></i> KOM';
    const komInput = document.createElement('input');
    komInput.type = 'text';
    komInput.id = 'kom';
    komInput.name = 'kom';
    komInput.required = true;
    komFormGroup.appendChild(komLabel);
    komFormGroup.appendChild(komInput);
    form.appendChild(komFormGroup);

    // Membuat input Upload Photo
    const photoFormGroup = document.createElement('div');
    photoFormGroup.classList.add('form-group');
    const photoLabel = document.createElement('label');
    photoLabel.setAttribute('for', 'photo');
    photoLabel.innerHTML = '<i class="fas fa-camera"></i> Upload Photo';
    const photoInput = document.createElement('input');
    photoInput.type = 'file';
    photoInput.id = 'photo';
    photoInput.name = 'photo';
    photoInput.accept = 'image/*';
    photoFormGroup.appendChild(photoLabel);
    photoFormGroup.appendChild(photoInput);
    form.appendChild(photoFormGroup);

    // Membuat tombol Submit
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
    form.appendChild(submitButton);

    // Memasukkan form ke dalam formContainer
    formContainer.appendChild(form);
    container.appendChild(formContainer);

    // Membuat result container
    const resultContainer = document.createElement('div');
    resultContainer.id = 'resultContainer';
    resultContainer.classList.add('card');
    resultContainer.style.display = 'none';

    const photoContainer = document.createElement('div');
    photoContainer.id = 'photoContainer';
    resultContainer.appendChild(photoContainer);

    const infoContainer = document.createElement('div');
    infoContainer.id = 'infoContainer';
    resultContainer.appendChild(infoContainer);

    container.appendChild(resultContainer);
    
    // Memasukkan container ke dalam root
    root.appendChild(container);

    // Event listener untuk form submit
    document.getElementById('studentForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const nim = document.getElementById('nim').value;
        const kom = document.getElementById('kom').value;
        const photoFile = document.getElementById('photo').files[0];

        if (photoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                displayResult(username, nim, kom, e.target.result);
            }
            reader.readAsDataURL(photoFile);
        } else {
            displayResult(username, nim, kom);
        }
    });

    // Fungsi untuk menampilkan hasil
    function displayResult(NamaAnda, nim, kom, photoUrl) {
        formContainer.style.display = 'none';
        resultContainer.style.display = 'flex';

        if (photoUrl) {
            photoContainer.innerHTML = `<img src="${photoUrl}" alt="Uploaded Photo">`;
        }

        infoContainer.innerHTML = `
            <p><i class="fas fa-user"></i> Username: ${username}</p>
            <p><i class="fas fa-id-card"></i> NIM: ${nim}</p>
            <p><i class="fas fa-users"></i> KOM: ${kom}</p>
        `;
    }
});
