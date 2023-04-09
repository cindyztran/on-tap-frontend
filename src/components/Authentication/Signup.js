import { useState } from "react"
import { signupWithEmailAndPassword } from "../../services/firebase"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="">
            <div className="">
                <div className="row">
                    <input
                        className='my-1 p-2'
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <input
                        className='my-1 p-2'
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button
                        className="my-2 rounded"
                        onClick={() => signupWithEmailAndPassword(email, password)}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup