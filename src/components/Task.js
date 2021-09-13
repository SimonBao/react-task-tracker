/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggle }) => (
  <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    <h3>
      {task.text}
      {' '}
      <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursour: 'pointer' }} />
    </h3>
    <p>{task.day}</p>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reminder: PropTypes.bool.isRequired,
    day: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
