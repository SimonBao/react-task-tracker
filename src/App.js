import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/Add';
import Footer from './components/Footer';
import About from './components/About';

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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const onAdd = () => {
    setShowAddTask(!showAddTask);
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', { 
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks,data]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id ));
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, { 
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? data : task));
  }

  return (
    <Router>
      <div className="container">
        <Header showAdd={showAddTask} onAdd={onAdd} />
        <Route path="/" exact render={(props) => (
          <>
            { showAddTask && <AddTask onAdd={addTask} /> }
            { tasks && <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> }
          </>
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>  );
}

export default App;
