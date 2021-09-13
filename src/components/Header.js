import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={ showAdd ? 'Close' : 'Add'} onClick={onAdd} color={ showAdd ? 'red' : 'green' }/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

// const headingStyle = {
//   color: 'red'
// }

export default Header;
