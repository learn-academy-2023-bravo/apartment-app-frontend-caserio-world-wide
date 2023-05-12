import Navigation from "./Navigation"

const Header = ({ current_user }) => {
    return(
        <header className="header">
            <Navigation current_user={current_user} />
        </header>
    )
}

export default Header