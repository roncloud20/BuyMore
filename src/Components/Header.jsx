import { Link } from "react-router-dom";
const Header = ({searchChange}) => {
    return(
        <header>
            <input
                type={'search'}
                placeholder={'Search for Items'}
                onChange={searchChange}
            />
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;