import React, {useState} from 'react';

function ToDoList (){
    const [tasks, setTasks] = useState(["e.g.: Water the plants"]);

   

    function handleAddTask (){
        const newTask = document.getElementById('taskInput').value;
        setTasks(t => {
            const tasksToKeep = t.filter(t => t !== "e.g.: Water the plants");
            return [newTask, ...tasksToKeep]})
        document.getElementById('taskInput').value = "";
    }


    return (
        <>
            <h1>To do list:</h1>
            <ul>
                {tasks.map((task,index) =>
                <li key={index}>{task}</li>)}
            </ul>
            <ul>
            <li><input type="text" placeholder="Enter a task" id="taskInput"></input>
            <button onClick={handleAddTask}>+</button></li>
            </ul>
            
        </>
    )
}

export default ToDoList