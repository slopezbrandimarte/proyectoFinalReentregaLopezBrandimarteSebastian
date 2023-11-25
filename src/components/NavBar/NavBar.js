import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";



const NavBar = () => {
    return(
        <nav className="navbar" >
            
                    <div className="buttonContainer">
                    
                            <Link to="/" className="LinkTitulo">
                                <h3 className="navbar-title">Om Shanti</h3>
                            </Link>
                        
                    
                            <NavLink to={`/category/indumentaria`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
                        
                        
                            <NavLink to={`/category/sahumerio`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Sahumerios</NavLink>
                        
                    
                            <NavLink to={`/category/decoracion`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Decoracion</NavLink>
                        
                        
                        
                    
                    
                        <CartWidget/>
                    
                
            </div>
        </nav>
    )
};

export default NavBar;