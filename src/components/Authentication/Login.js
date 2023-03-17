import { loginWithGoogle, loginWithEmailAndPassword } from '../../services/firebase'

const Login = () => {
    return (
        <div className="">
            <div className="row">
                <input
                    className='my-1 p-2'
                    type="text"
                    placeholder="Enter email..."
                />
                    <input
                        className='my-1 p-2'
                        type="password"
                        placeholder="Enter password"
                    />
            </div>
            <div className="row">
                <button
                    className="my-1 rounded"
                    onClick={() => loginWithEmailAndPassword()}
                
                >
                    Login
                </button>
            </div>
            <div className='row'>
                <button
                    className="my-1 rounded"
                    onClick={() => loginWithGoogle()}
                >
                    Login with Google
                </button>
            </div>
        </div>
    )
}

export default Login