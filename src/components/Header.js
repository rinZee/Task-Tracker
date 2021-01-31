import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, toggleAdd, onClick}) => {

    return (
        <div className='header'>
            <h1>{title}</h1>

            <Button color={toggleAdd ? 'red' : 'green'} text={toggleAdd ? 'Close' : 'Add'}onClick={onClick}  />
        </div>
    )
}


Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header

