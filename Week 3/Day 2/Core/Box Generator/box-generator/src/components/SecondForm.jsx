import React, { useState } from 'react';

const SecondForm = (props) => {
    const { newboxColor, setNewBoxColor } = props;
    const [ color, setColor] = useState("");
    const [ size, setSize] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewBoxColor ( [ ...newboxColor, { color: color, size: size + "px", } ] );
        setColor("");
        setSize("");
    };
    return (
        <form onSubmit={ handleSubmit }>
            <label>Color </label>
            <input type='text' name = "color" value={ color } onChange = { (e) => setColor(e.target.value) } />
            <label>Size </label>
            <input type='text' name = "size" value={ size } onChange = { (e) => setSize(e.target.value) } />
            <button>Add</button>
        </form>
    );

};
    

export default SecondForm;