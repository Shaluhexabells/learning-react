import { LOGO_URL } from "../utils/constant";
export const Header = () => {
    return (
        <div className="header">
           <div className="custom-container flexHead">
            <a href="#">
                    <img src={LOGO_URL}
                    alt="logo" className="logo"/>
                </a>
                <div className="nav-items">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Cart</a>
                </div>
           </div>
        </div>
    )
}

export default Header;