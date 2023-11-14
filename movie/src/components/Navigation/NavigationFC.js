
// _______________________________DŨNG___________________________________________
import React, { useContext } from "react";
// import useRefMenu from "../Hooks/useRefMenu";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Navbar, NavItem, Icon, Switch } from "react-materialize";
export default function NavigationFC() {
  const { theme, toggle } = useContext(ThemeContext);
  // const responseMenu = useRefMenu();
  return (
    // _______________________________________________________________________________________________________________________
    <div className="navigation-header"  style={{backgroundColor: theme.backgroundColor, borderBottomColor: theme.borderBottomColor, color: theme.color}}>
    <Navbar className="navigation-nav"  style={{backgroundColor: theme.backgroundColor, borderBottomColor: theme.borderBottomColor}}
    alignLinks="right"
    brand={<Link style={{color: theme.color, textAlign: "start", fontWeight: "bold"}} className="brand-logo">B</Link>}
    id = "mobile-nav"
    menuIcon = {<Icon style={{backgroundColor: theme.backgroundColor, color: theme.color}}><i class="fa-solid fa-bars"></i></Icon>}
    options = {{
      draggable: true, 
      edge: "left", 
      inDuration: 250, 
      onCloseEnd: null, 
      onOpenStart: null, 
      outDuration: 200, 
      preventScrolling: true
    }}
    >
      <div className="navigation-item" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <NavItem>
      <Link to={"/"} style= {{color: theme.color}}>
        Home
      </Link>
      </NavItem>
      <NavItem>
      <Link to={"/news"} style= {{color: theme.color}}>
        News
      </Link>
      </NavItem>
      <NavItem>
        <Link to={"/category"} style= {{color: theme.color}}>Category</Link>
      </NavItem>
      <NavItem>
        <Link to={"/about"} style= {{color: theme.color}}>About</Link>
      </NavItem>
      <NavItem>
        <Link to={"/contact"} style= {{color: theme.color}}>Contact</Link>
      </NavItem>
      <NavItem>
        <Switch className="switch-mode" href="#switchmode" onClick={toggle} style={{backgroundColor: theme.backgroundColor, color: theme.color}}
        >
        </Switch>
      </NavItem>
      </div>
    </Navbar>
    </div>
    );
    // __________________________________________________________________________________________________________________________________
  }
  // __________________________________________OLD VERSION___________________________________________
  //     <div>
  //       <nav
  //         className="navigation"
  //         style={{
  //           backgroundColor: theme.backgroundColor,
  //           color: theme.color,
  //         }}
  //       >
  //         {/* Đây là header*/}
  //         <div
  //           className="header-top"
  //           style={{
  //             backgroundColor: theme.backgroundColor,
  //           }}
  //         >
  //           <div className="containers">
  //             <Link to={"/"}>
  //               <a
  //                 href="index.html"
  //                 className="header-logo"
  //                 style={{ color: theme.color }}
  //               >
  //                 B
  //               </a>
  //             </Link>
  //             <ul className="menu">
  //               <li className="menu-item">
  //                 <Link to={"/movies"}>
  //                   <a
  //                     href="#!"
  //                     className="menu-link"
  //                     style={{ color: theme.color }}
  //                   >
  //                     News
  //                   </a>
  //                 </Link>
  //               </li>
  //               <li className="menu-item">
  //                 <Link to={"/category"}>
  //                   <a
  //                     href="#!"
  //                     className="menu-link"
  //                     style={{ color: theme.color }}
  //                   >
  //                     Category
  //                   </a>
  //                 </Link>
  //               </li>
  //               <li className="menu-item">
  //                 <Link to={"/news"}>
  //                   <a
  //                     href="#!"
  //                     className="menu-link"
  //                     style={{ color: theme.color }}
  //                   >
  //                     About
  //                   </a>
  //                 </Link>
  //               </li>
  //               <li className="menu-item">
  //                 <Link to={"/plans"}>
  //                   <a
  //                     href="#!"
  //                     className="menu-link"
  //                     style={{ color: theme.color }}
  //                   >
  //                     Contact
  //                   </a>
  //                 </Link>
  //               </li>
  //               <li className="menu-item">
  //                 <Link to={"/login"}>
  //                   <a
  //                     href="#!"
  //                     className="menu-link header-button btn btn--border btn--rounded"
  //                     style={{ color: theme.color }}
  //                   >
  //                     Login
  //                   </a>
  //                 </Link>
  //               </li>
  
  //               {/* __________SEARCH BAR____________________________
  //               <li className="menu-item">
  //                 <input className="menu-link search-box__input" type="text">
  //                   button
  //                 </input>
  //               </li> 
  // _____________________________________________________*/}
  //               {/* DARK/LIGHT MODE____________________________________________________ */}
  //               <div className="switch_nav">
  //                 <a href="#!">
  //                   <label className="switch">
  //                     <input type="checkbox" />
  //                     <span
  //                       className="slider mode"
  //                       href="#switchmode"
  //                       onClick={toggle}
  //                       style={{
  //                         outline: "none",
  //                       }}
  //                       data-testid="toggle-theme-btn"
  //                     ></span>
  //                   </label>
  //                 </a>
  //               </div>
  //               {/* _______________________________________________________________________ */}
  //             </ul>
  //             <button class="menu-toggle" ref={responseMenu}>
  //               <span
  //                 class="line line-first"
  //                 style={{
  //                   backgroundColor: theme.color,
  //                 }}
  //               >
  //                 {" "}
  //               </span>
  //               <span
  //                 class="line line-second"
  //                 style={{
  //                   backgroundColor: theme.color,
  //                 }}
  //               >
  //                 {" "}
  //               </span>
  //             </button>
  //           </div>
  //           <img
  //             srcSet="assets/images/header-line2.png "
  //             alt=""
  //             className="header-line"
  //           ></img>
  //         </div>
  //         <section
  //           className="banner"
  //           style={{
  //             backgroundColor: theme.backgroundColor,
  //             color: theme.color,
  //           }}
  //         >
  //           <div className="containers">
  //             <h1 className="banner-heading">The film you need</h1>
  //             <p className="banner-desc">
  //               The film you need, designed by cubi for casestudy of FER201m to be
  //               accessible for Everyone!
  //             </p>
  //             <div className="banner-buttons">
  //               <a
  //                 href="#!"
  //                 className="btn btn--border btn--rounded"
  //                 style={{ color: theme.color }}
  //               >
  //                 Explore
  //               </a>
  //               <a
  //                 href="#!"
  //                 className="btn btn--primary btn--rounded has-shadow"
  //                 style={{ color: theme.color }}
  //               >
  //                 Buy Plans
  //               </a>
  //             </div>
  //           </div>
  //         </section>
  //       </nav>
  //     </div>
  
  


