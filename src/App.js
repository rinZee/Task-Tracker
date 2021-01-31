import {useState, useEffect} from 'react'; 
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [tasks, settasks] = useState([])    
  const [toggleAddTask, setToggleAddTask] = useState(false)

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    settasks(tasksFromServer)
  }
  getTasks()
  
}, [])

//fetch tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
const data = await res.json()

return data
}

//fetch task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
const data = await res.json()

return data
}

//add task
  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(task)
    })

    const data = await res.json()

    settasks([...tasks, data])

//     const id = Math.floor(Math.random() * 10000) + 1
//     const newTask = {id, ...task}
  }

  //delete task
  const deleteTask = async (id) => {
await fetch(`http://localhost:5000/tasks/${id}`, {
  method: 'DELETE',
})
    settasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  //toggle task completion
  const toggleTask = async (id) => {
const taskToToggle = await fetchTask(id)
const updatedTask = {...taskToToggle, completed:!taskToToggle.completed}

const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type' : 'application/json',
  },
  body : JSON.stringify(updatedTask)
})

const data = await res.json()

    settasks(tasks.map((task) => 
    task.id === id ? { ...task, completed:data.completed} : task
    ))
}

  return (
    <div className="container">
      <Header title={'Task Tracker'} toggleAdd={toggleAddTask} onClick={() => {setToggleAddTask(!toggleAddTask)}}/>
      {toggleAddTask && <AddTask addTask={addTask}/>}
{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
