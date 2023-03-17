import Header from '../Header/Header'
import { loginWithGoogle } from '../../services/firebase'

const Login = () => {
    return (
        <div className="">
            <Header/>
            <div className="row">
                <input
                    type="text"
                    placeholder="Enter email..."
                />
                <div className="row">
                    <input
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
            </div>
            <div className="row">
                <button
                
                >
                    Login
                </button>
            </div>
            <button
                onClick={() => loginWithGoogle()}
            >
                Login with Google
            </button>
        </div>
    )
}

export default Login