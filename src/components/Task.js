import { FaTimes } from 'react-icons/fa'

//App - Tasks - Task
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div 
            className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)} //Führt dann am Ende deleteTask() von App.js aus
                />
            </h3>        
            <p>{task.day}</p>    
        </div>
    )
}

export default Task
