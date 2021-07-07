import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="top-nav">
            <Link to="/">
                <div>On Tap</div>
            </Link>
        </nav>
    );
}

export default Header;