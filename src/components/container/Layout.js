import Header from "../Header/Header"

const Layout = ({Component, user, ...rest}) => {
    return (
        <div>
            <Header user={user} />
            <div className="container">
                <Component
                    {...rest}
                    user={user}
                />
            </div>
        </div>
    )
}

export default Layout;