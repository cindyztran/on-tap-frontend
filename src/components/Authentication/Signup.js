import { signupWithEmailAndPassword } from "../../services/firebase"

const Signup = () => {
    return (
        <div className="">
            <div className="">
                <div className="row">
                    <input
                        className='my-1 p-2'
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        className='my-1 p-2'
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        className='my-1 p-2'
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        className='my-1 p-2'
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className="my-2 rounded"
                        onClick={() => signupWithEmailAndPassword()}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup