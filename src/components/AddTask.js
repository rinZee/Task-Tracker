import {useState} from 'react';
const AddTask = ({addTask}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [completed, setCompleted] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('please enter text')
            return
        }

        addTask({title, day, completed})
        setTitle('')
        setDay('')
        setCompleted(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Task</label>
            <input type='text' placeholder='Add Task' value={title} onChange={(e)=> 
setTitle(e.target.value)
            }></input>
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=> 
setDay(e.target.value)
            }></input>
            </div>

            <div className='form-control form-control-check' >
            <label>Set Completion</label>
            <input type='checkbox' checked={completed} value={completed} onChange={(e)=> 
setCompleted(e.currentTarget.checked)
            }></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>



        </form>
    )
}

export default AddTask
