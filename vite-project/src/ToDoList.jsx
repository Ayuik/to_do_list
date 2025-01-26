import React, {useState} from 'react';

function ToDoList (){
    const [tasks, setTasks] = useState([]);

   

    function handleAddTask (){
        const newTask = document.getElementById('taskInput').value
        setTasks([...tasks, newTask])
    }


    return (
        <>
            <h1>To do list:</h1>
            <input type="text" placeholder="Enter a task" id="taskInput"></input>
            <button onClick={handleAddTask}>Add task to the list</button>
            <p>
                {tasks}
            </p>
        </>
    )
}

export default ToDoList