import {useState} from 'react'; 
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [tasks, settasks] = useState([{title: 'make bed', day: 'Fri 5th at 3:00 pm' ,id: 1, completed: true}, {title: 'make coffee',  day: 'Thu 4th at 3:00 pm', id: 2, completed: false}, {title: 'drink coffee',  day: 'Sat 6th at 3:00 pm', id: 3, completed: true}])    
  
  const addTask = (word) => {
    console.log(word)
  }

  const deleteTask = (id) => {
    settasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  const toggleTask = (id) => {
    settasks(tasks.map((task) => 
    task.id === id ? { ...task, completed:!task.completed} : task
    ))
}

  return (
    <div className="container">
      <Header title={'Task Tracker'}/>
      <AddTask addTask={addTask}/>
{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
