import React, {useState} from 'react';

const UserForm = (props) => {
    const initUser = { id: null, nome: '', idade: null, email: '' };
    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;

        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        const { nome, idade, email } = user;

        if (nome && idade && email) 
            props.addUser(user);
    }

    return (
        <form>
            <label>Nome</label>
            <input className="u-full-width" type="text" name='nome' value={user.nome} onChange={handleChange} />
            <label>Idade</label>
            <input className="u-full-width" type="text" name='idade' value={user.idade} onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="text" name='email' value={user.email} onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit}>Adicionar Usuário</button>
        </form>
    )
}

export default UserForm;