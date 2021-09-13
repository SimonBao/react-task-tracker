/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => (
  <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>
    {text}
  </button>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
