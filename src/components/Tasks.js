import { useState} from 'react';
import Task from './Task';

const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks;
