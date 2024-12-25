import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/auth/signin'>Signin</Link>
                </li>
                <li>
                    <Link to='/auth/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/'>Log out</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar