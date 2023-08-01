import { useState } from 'react';
import './Navbar.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [pad, setPad] = useState(true);
    useEffect(() => {
        function scroll() {
            if (window.scrollY > 100) {
                setPad(false);
            } else {
                setPad(true);
            }
        }
    });
    // state = { clicked: false };
    // handleClick = () => {
    //     this.setState({
    //         clicked:
    //             !this.state.clicked
    //     })
    // }

    // render () {

        return (
            <nav style={pad ? { padding: "30px 20px" } : {}}>
                <div className="nav_left">
                    <img src='https://preview.colorlib.com/theme/comodo/img/logo.png' alt='Logo' />
                </div>
                <div className="nav_center">
                    <div className="nav_center_btn" ><NavLink to='/'>Home</NavLink></div>
                    <div className="nav_center_btn"><NavLink to='/about'>About</NavLink></div>
                    <div className="nav_center_btn"><NavLink to='/gallery'>Gallery</NavLink></div>
                    <div className="nav_center_btn submenu show">Pages
                        <ul className="dropdown_menu">
                            <li className="nav1_center_btn">
                                <NavLink className="nav_drop_link" to='/pricingpg'>Pricing</NavLink>
                            </li>
                            <li className="nav1_center_btn">
                                <NavLink className="nav_drop_link" to='/upcomingpg'>Games</NavLink>
                            </li>
                            <li className="nav1_center_btn">
                                <a className="nav_drop_link" href="https://preview.colorlib.com/theme/comodo/elements.html">Elements</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_center_btn submenu show">Blog
                        <ul className="dropdown_menu">
                            <li className="nav1_center_btn">
                                <a className="nav_drop_link" href="https://preview.colorlib.com/theme/comodo/elements.html">Blog</a>
                            </li>
                            <li className="nav1_center_btn">
                                <a className="nav_drop_link" href="https://preview.colorlib.com/theme/comodo/elements.html">Blog Details</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_center_btn"><NavLink to='/contact'>Contact</NavLink></div>
                </div>
                <div className="nav_right"><NavLink to='#'>Join Us</NavLink></div>
                <div id='tablet'
                //  onClick={this.handleClick}
                 ><i id='bar' 
                //  className={this.state.clicked ? "fa-solid fa-bars":"fa-solid fa-bars"}
                 className="fa-solid fa-bars" ></i></div>
            </nav>
        )
    // }
        
    

}


export default Navbar;