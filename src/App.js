import {useState} from 'react'; 
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks, settasks] = useState([{title: 'make bed', day: 'Fri 5th at 3:00 pm' ,id: 1, completed: true}, {title: 'make coffee',  day: 'Thu 4th at 3:00 pm', id: 2, completed: false}, {title: 'drink coffee',  day: 'Sat 6th at 3:00 pm', id: 3, completed: true}])    
  
  const deleteTask = (id) => {
    settasks(tasks.filter((task) => 
      task.id !== id
    ))
}
  return (
    <div className="container">
      <Header title={'Task Tracker'}/>
{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
