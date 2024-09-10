import classes from './header.module.css';
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    return (
        <div className={classes.header}>
            <nav className={classes.headerBlock}>
                <NavLink className={location.pathname == '/'?classes.linkActive:classes.link} to={"/"}>Все котики</NavLink>
                
                <NavLink className={location.pathname == '/likes'?classes.linkActive:classes.link} to={"/likes"}>Любимые котики</NavLink>
            </nav>
        </div>
    );
}
 