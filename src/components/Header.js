import { login, logout } from '../services/firebase';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="top-nav"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Link to="/">
                <div>On Tap</div>
            </Link>
            <div 
                style={{ display: 'flex', alignItems: 'center'}}>
                    {
                        props.user ?
                        <>
                        <div style={{marginRight: 10, color: 'white',
                        fontSize: 15 }}>Welcome, {props.user.displayName}</div>
                        <img src={props.user.photoURL} alt={props.user.displayName} style={{
                            height: 30,
                            borderRadius: '50%',
                            marginRight: 10,
                            
                        }}/>
                        <div 
                            onClick={logout}
                            style={{
                            cursor: 'pointer',
                            marginRight: 10,
                            color: 'white',
                            fontSize: 15
                        }}>
                            Logout
                        </div>
                    </>
                    :
                    <div
                        onClick={login} 
                        style={{
                        cursor: 'pointer',
                        marginRight: 10,
                        color: 'white',
                    }}>
                    Login
                </div>
                
                }

            </div>
        </nav>
    );
}

export default Header;