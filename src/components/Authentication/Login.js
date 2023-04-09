import { loginWithGoogle, loginWithEmailAndPassword } from '../../services/firebase'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="">
            <div className="row">
                <input
                    className='my-1 p-2'
                    type="text"
                    placeholder="Enter email..."
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                    <input
                        className='my-1 p-2'
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
            </div>
            <div className="row">
                <button
                    className="my-1 rounded"
                    onClick={() => loginWithEmailAndPassword(email, password)}
                
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