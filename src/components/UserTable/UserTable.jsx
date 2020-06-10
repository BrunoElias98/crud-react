import React from 'react';

const UserTable = ({ users, deleteUser, editUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>E-mail</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => {
                        const { id, nome, idade, email } = user;
                        return (
                            <tr>
                                <td>{nome}</td>
                                <td>{idade}</td>
                                <td>{email}</td>
                                <td>
                                    <button onClick={() => deleteUser(id)}>Deletar</button>
                                </td>
                                <td>
                                    <button onClick={() => editUser(id, user)}>Editar</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                        <tr>
                            <td colSpan={5}>Nenhum usuário cadastrado.</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable;