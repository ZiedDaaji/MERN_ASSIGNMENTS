import React, { useState } from  'react';
    
const UserForm = (props) => {
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
                {firstName.length < 2 && firstName.length > 0 ? ( <p>First Name must be at least 2 characters</p> ) : null }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (event) => setLastName(event.target.value) } />
                {lastName.length < 2 && lastName.length > 0 ? ( <p>First Name must be at least 2 characters</p> ) : null }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (event) => setEmail(event.target.value) } />
                {email.length < 5 && email.length > 0 ? ( <p>First Name must be at least 5 characters</p> ) : null }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (event) => setPassword(event.target.value) } />
                {password.length < 8 && password.length > 0 ? ( <p>First Name must be at least 8 characters</p> ) : null }
                {password !== confirmPassword ? ( <p>Passwords must match</p> ) : null }

            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (event) => setConfirmPassword(event.target.value) } />
                <h5>something</h5>
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
    
export default UserForm;
