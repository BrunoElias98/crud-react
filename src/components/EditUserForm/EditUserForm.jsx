import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        const { nome, idade, email } = user;

        if (nome && idade && email)
            props.updateUser(user);
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props]);

    return (
        <form>
            <label>Nome</label>
            <input className="u-full-width" type="text" value={user.nome} name="nome" onChange={handleChange} />
            <label>Idade</label>
            <input className="u-full-width" type="text" value={user.idade} name="idade" onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;