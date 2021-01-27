import {useState} from 'react'; 
import Header from './components/Header';
import Tasks from './components/Tasks';
import Button from './components/Button';
function App() {
  const [tasks, settasks] = useState([{title: 'make bed', id: 1, completed: true}, {title: 'make coffee', id: 2, completed: false}, {title: 'drink coffee', id: 3, completed: true}])    
  return (
    <div className="container">
      <Header title={'Task Tracker'}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
