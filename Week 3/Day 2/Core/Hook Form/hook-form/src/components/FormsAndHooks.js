import React, { useState } from  'react';
    
const FormsAndHooks = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (event) => setFirstName(event.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (event) => setLastName(event.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (event) => setEmail(event.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (event) => setPassword(event.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (event) => setConfirmPassword(event.target.value) } />
            </div>
            <h2>You Form Data</h2>
            <p>First Name { firstName }</p>
            <p>Last Name { lastName }</p>
            <p>Email { email }</p>
            <p>Password { password }</p>
            <p>Confirm Password { confirmPassword }</p>
        </form>
        
    );
};
    
export default FormsAndHooks;
