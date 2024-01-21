import React from 'react'

const ListDisplay = (props) => {
    const { tasklist, deleteButton, handleDone } = props;
    return (
    <div>
        <>
        {
            tasklist.map((task, index) => (
                <div id='line' key={task.id}>
                    <p className={task.isDone? "done" : ""} >{task.content}</p>
                    <input type="checkbox" onChange={() => handleDone(task)} />
                    <button id='deletebtn' onClick={() => deleteButton(task.id)}>Delete</button>
                </div>
            )
            )
        }
        </>
    </div>
    )
}

export default ListDisplay;