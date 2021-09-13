const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  }
];

const Task = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  )
}

export default Task;
