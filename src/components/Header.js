import headerStyles from "../styles/header.module.css"
import cartImg from "../images/Cart.png";
const Header = () =>{
    return(
        <div className={headerStyles.headerContainer}>
            <div className={headerStyles.logo}>FreshKart</div>
            <div className={headerStyles.nav}>
                
            <div className={headerStyles.navItem}>FRUITS</div>            
            <div className={headerStyles.navItem}>VEGETABLES</div>
            </div>
            <div className={headerStyles.cart}>
                <img src={cartImg} alt=""/>
                <span>Cart</span>
            </div>
            <div className={headerStyles.login}>Login</div>

        </div>
    )
}
export default Header;