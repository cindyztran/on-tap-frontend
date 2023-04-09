import { loginWithGoogle, logout } from '../../services/firebase';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBeerMugEmpty} from '@fortawesome/free-solid-svg-icons'
function Header(props) {
    return (
        <nav className="top-nav py-1 shadow-sm"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Link to="/home">
                <div>
                    <div className='d-inline me-0'>
                        <FontAwesomeIcon icon={faBeerMugEmpty} />
                    </div>
                    <div className='d-inline'>
                        On Tap
                    </div>
                </div>
            </Link>
            <div 
                style={{ display: 'flex', alignItems: 'center'}}>
                    {
                        props.user ?
                        <>
                        <div 
                            style={
                                {marginRight: 10, 
                                    color: 'white',
                            fontSize: 15
                             }}
                        >
                            Welcome, {props.user.displayName}
                        </div>
                        <img src={props.user.photoURL} alt='' 
                            referrerPolicy="no-referrer"
                            style={{
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
                    onClick={loginWithGoogle} 
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