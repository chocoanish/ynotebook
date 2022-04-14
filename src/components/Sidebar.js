import React, { useState } from 'react';
import '../App.css';
import Notes from '../components/Notes';
import Create from '../components/Create'


const Sidebar = (props) => {
    // Adding 'close' class in nav element
    const [sidebar, setbar] = useState(false);
    const showsidebar = () => setbar(!sidebar);
    // Toggling Modes
    const [mode, setmode] = useState(true);
    const lidaMode = () => setmode(!mode);
    const switchMode = () => {
        lidaMode();
        if (mode) {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    }
    return (
        <>
            <nav className={sidebar ? "sidebar" : "sidebar close"}>
                <header>
                    <div className="image-text" >
                        <span className="image">
                            <i className="fa-brands fa-pied-piper logo" />
                        </span>
                        <div className="text logo-text">
                            <span className="name">{props.username} Anish Yadav</span>
                            <span className="profession">{props.profession}Web developer</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-angle-right toggle" onClick={showsidebar} />
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box true">
                            <i className="fa-solid fa-magnifying-glass icon" />
                            <input type="text" placeholder="Search..." />
                        </li>
                        <ul className="menu-links">
                            <Notes />
                            <Create />
                        </ul>
                    </div>
                    {/* Logout */}
                    <div className="bottom-content">
                        <li>
                            <span className='created'>
                                <i className="fa-solid fa-right-from-bracket icon" />
                                <span className="text nav-text">Logout</span>
                            </span>
                        </li>
                        {/* Dark and Light mode */}
                        <li className="mode true">
                            <div className="sun-moon">
                                <i className="fa-solid fa-moon moon icon" />
                                <i className="fa-solid fa-sun sun icon" />
                            </div>
                            <span className="mode-text text">{mode ? "Light mode" : "Dark mode"}</span>
                            <div className="toggle-switch" onClick={switchMode}>
                                <span className="switch" />
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;