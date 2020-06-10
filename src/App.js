import React, { useState } from 'react';
import userList from './data';
import UserTable from './components/UserTable/UserTable';
import UserForm from './components/UserForm/UserForm';
import EditUserForm from './components/EditUserForm/EditUserForm';
 
function App() {
  const [users, setUsers] = useState(userList);
  const [editing, setEditing] = useState(false);
  const initialUser = { id: null, nome: '', idade: null, email: '' };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => { 
    setUsers(users.filter(user => user.id !== id));
  }

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }

  const updateUser = (newUser) => {
    setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
  }

  localStorage.setItem("array de usuários", JSON.stringify(users));
  const getItemStorage = JSON.parse(localStorage.getItem("array de usuários"));
  
  return (
    <div className="container">
      <h1>React CRUD</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Editar usuário</h2>
              <EditUserForm 
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ): (
            <div>
              <h2>Adicionar Usuário</h2>
              <UserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>Listagem de Usuários</h2>
          <UserTable users={getItemStorage} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
