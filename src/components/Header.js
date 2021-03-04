import PropTypes from 'prop-types'
import Button from './Button'
//rafce shortcut snippet

 //{title} = destructor
 //davor const Header = (props)
 //unten dann {props.title}
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
//Typisierung (wie in TS)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//      color: 'red',
//      backgroundColor: 'black'
// }

export default Header