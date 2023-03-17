import Signup from "../../components/Authentication/Signup"
import Login from "../../components/Authentication/Login"
import Header from "../../components/Header/Header"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'
const Authentication = () => {
    const [showLogin, setShowLogin] = useState(false)

    return (
        <div>
            <Header/>
                <div className="container py-5">
                    <div className="card pb-5 px-5">
                        <div className="card-body">
                        <h5 className="card-title text-center">On Tap</h5>
                        <div className="fs-1 text-center">
                            <FontAwesomeIcon icon={faBeerMugEmpty} />
                        </div>
                        <div className="text-center">
                            {!showLogin ? 
                                <button 
                                    onClick={() => setShowLogin(true)}
                                    className={`bg-transparent link-primary card-text text-center fs-6`}
                                >
                                    Already have an account?
                                </button>
                                : 
                                <button 
                                    onClick={() => setShowLogin(false)}
                                    className={`bg-transparent link-primary card-text text-center fs-6`}
                                >
                                    Back to Signup
                                </button>
                            }
                        </div>
                       {showLogin ? <Login/> : <Signup/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication