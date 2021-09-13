import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/Add';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Driving Lesson',
      day: 'March 19th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Dentist Appointment',
      day: 'November 7th at 5:30pm',
      reminder: true,
    }
  ])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const onAdd = () => {
    setShowAddTask(!showAddTask);
  }

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="container">
      <Header showAdd={showAddTask} onAdd={onAdd} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks && <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> }
    </div>
  );
}

export default App;
