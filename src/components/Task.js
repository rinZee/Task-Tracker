import {FaTimes} from 'react-icons/fa';
const Task = ({task, onDelete}) => {
    
    return (
        <div className='task'>
        <h3>{task.title} <FaTimes style={{color: 'red', style: 'pointer'}} onClick={() => {onDelete(task.id)}}/></h3>
        <p>{task.day}</p>
        
        </div>
    )
}

export default Task
