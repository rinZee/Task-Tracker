import {FaTimes} from 'react-icons/fa';
const Task = ({task, onDelete, onToggle}) => {
    
    return (
        <div className='task' onDoubleClick={() => {onToggle(task.id)}}>
        <h3 style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.title} <FaTimes style={{color: 'red', style: 'pointer'}} onClick={() => {onDelete(task.id)}}/></h3>
        <p>{task.day}</p>
        
        </div>
    )
}

export default Task
