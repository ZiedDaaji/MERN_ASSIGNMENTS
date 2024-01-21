import React, { useState } from 'react'

const ListForm = (props) => {
    const [content, setContent] = useState("");
    const { updateTaskList } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTaskList({
            content: content,
            isDone: false,
            id: Math.floor(Math.random() * 100000000).toString(),
        });
        setContent("");
    };

    return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <input type='text' value={ content } onChange = { (e) => setContent(e.target.value) } />
            <br/>
            <button id='addbtn'>Add</button>
        </form>
    </div>
    );
};

export default ListForm;