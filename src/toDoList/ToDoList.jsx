import './ToDoList.css';
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
            <div id="container">
                <ul>
                    {tasks.map((task, index) =>
                    <div className="line">
                        <div id="task">
                            <li key={index}>{task}</li>
                        </div>
                        <div id="buttons"> 
                            <button onClick={() => handleMoveUp(index)}>↑</button><button onClick={() => handleMoveDown(index)}>↓</button><button onClick={() => handleDelete(index)}>-</button>
                        </div>
                    </div>
                    )}
                </ul>
                <ul>
                <div className="line">
                    <div><li><input type="text" placeholder="Enter a task" id="taskInput"></input></li></div>
                    <div><button onClick={handleAddTask}>+</button></div>
                </div>
                </ul>
            </div>
            <button onClick={handleResetList} id="reset_btn">Reset</button>
        </>
    )
}

export default ToDoList