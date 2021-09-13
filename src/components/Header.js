import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} color='blue'/>
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
