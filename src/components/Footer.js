import { Link } from 'react-router-dom'
//Damit Seite nicht immer lädt

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
