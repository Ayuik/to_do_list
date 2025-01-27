import React, {useState} from 'react';

function ToDoList (){
    const [tasks, setTasks] = useState(["e.g.: Water the plants"]);

    function handleAddTask (){
        const newTask = document.getElementById('taskInput').value;
        if (newTask !== null && newTask !== undefined && newTask !== "") {
            setTasks(t => {
            const tasksToKeep = t.filter(t => t !== "e.g.: Water the plants");
            return [newTask, ...tasksToKeep]})
        }
        document.getElementById('taskInput').value = "";
    }

    function handleDelete(index){
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleMoveUp(index){
        setTasks(t => 
        {
            if (index === 0) return t;
            const newOrder = [...t];
            [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
            return newOrder;
        });
    }

    function handleMoveDown(index){
        setTasks(t => 
        {
            if (index === t.length - 1) return t;
            const newOrder = [...t];
            [newOrder[index + 1], newOrder[index]] = [newOrder[index], newOrder[index + 1]];
            return newOrder;
        });
    }

    function handleResetList(){
        window.location.reload()
    }

    return (
        <>
            <h1>To do list:</h1>
            <ul>
                {tasks.map((task, index) =>
                <li key={index}>
                    {task} <button onClick={() => handleMoveUp(index)}>↑</button><button onClick={() => handleMoveDown(index)}>↓</button><button onClick={() => handleDelete(index)}>-</button>
                </li>)}
            </ul>
            <ul>
            <li><input type="text" placeholder="Enter a task" id="taskInput"></input>
            <button onClick={handleAddTask}>+</button></li>
            </ul>
            <button onClick={handleResetList}>Reset</button>
        </>
    )
}

export default ToDoList