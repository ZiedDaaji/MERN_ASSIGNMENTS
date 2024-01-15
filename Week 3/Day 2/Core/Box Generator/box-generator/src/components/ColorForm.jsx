import React, { useState } from 'react';

const ColorForm = (props) => {
    const { boxColor, setBoxColor } = props;
    const [ color, setColor] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setBoxColor ( [ ...boxColor, color ] );
    };
    return (
        <form onSubmit={ handleSubmit }>
            <label>Color </label>
            <input type='text' name = "color" onChange = { (e) => setColor(e.target.value) } />
            <button>Add</button>
        </form>
    );

};

export default ColorForm;
