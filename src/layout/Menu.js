import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuData from "./MenuData";
// import * as GiIcons from "react-icons/gi";
// import * as MdIcons from "react-icons/md";

export const Menu = () => {

    const [menuBar, setMenuBar] = useState(false);

    const showMenuBarHandler = () => setMenuBar(!menuBar);

    return (
        <>
            <button className={menuBar ? "exitMenuBtn" : "menuBtn"} onClick={showMenuBarHandler}></button>
            {/* <button className={menuBar ? "exitMenuBtn" : "menuBtn"} onClick={showMenuBarHandler}>{menuBar ? <MdIcons.MdClose /> : <GiIcons.GiHamburgerMenu />}</button> */}
                 <>
                    <nav className={menuBar ? "openMenu active" : "closeMenu"}>
                        <ul>
                            {MenuData.map((item, index) => {
                                return (
                                    <li key={index} className="link" onClick={showMenuBarHandler}>
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                    )})
                            }
                        </ul>
                    </nav>
                    <div className={menuBar ? "pageGradient" : null} onClick={menuBar ? showMenuBarHandler : null}></div>
                  </>
        </>
    )
}

export default Menu;