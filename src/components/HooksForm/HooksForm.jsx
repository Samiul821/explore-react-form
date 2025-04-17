import React from 'react';
import useInputField from '../../hooks/useInputField';

const HooksForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit:',name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} name='name' type="text" onChange={nameOnChange} />
                <br />
                <input defaultValue={email} type="email" name="email" onChange={emailOnChange} />
                <br />
                <input defaultValue={password} type="password" name="password" onChange={passwordOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;