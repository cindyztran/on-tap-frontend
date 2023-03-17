import Header from "../Header/Header"

const Layout = ({Component, ...rest}) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <Component
                    {...rest}
                />
            </div>
        </div>
    )
}

export default Layout;