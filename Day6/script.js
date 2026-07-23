let users = [];
let nextId = 1;
let editId = null;

function submitUser(){
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const age = document.getElementById('age').value;
  const isGraduated = document.getElementById('isGraduated').value === 'true';
  const error = document.getElementById('error');

  if(!fname || !lname || age === ''){
    error.textContent = 'Please fill in all fields';
    return;
  }
  error.textContent = '';

  if(editId !== null){
    const user = users.find(u => u.id === editId);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.isGraduated = isGraduated;
    editId = null;
    document.getElementById('submitBtn').textContent = 'Add User';
  } else {
    users.push({ id: nextId++, fname, lname, age, isGraduated });
  }

  clearForm();
  renderTable();
}

function clearForm(){
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('age').value = '';
  document.getElementById('isGraduated').value = 'true';
}

function editUser(id){
  const user = users.find(u => u.id === id);
  document.getElementById('fname').value = user.fname;
  document.getElementById('lname').value = user.lname;
  document.getElementById('age').value = user.age;
  document.getElementById('isGraduated').value = String(user.isGraduated);
  editId = id;
  document.getElementById('submitBtn').textContent = 'Save';
}

function deleteUser(id){
  users = users.filter(u => u.id !== id);
  renderTable();
}

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  users.forEach(u => {
    tbody.innerHTML += `
      <tr>
        <td>${u.fname}</td>
        <td>${u.lname}</td>
        <td>${u.age}</td>
        <td>${u.isGraduated ? 'Yes' : 'No'}</td>
        <td>
          <button onclick="editUser(${u.id})">Edit</button>
          <button onclick="deleteUser(${u.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}