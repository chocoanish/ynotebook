import react, { useState } from 'react';
import '../App.css';

const Titles = (props) => {
    const [sidebar, setbar] = useState(false);
    const showsidebar = () => setbar(!sidebar);

    const [mode,setmode] = useState(true);
    const lidaMode = ()=> setmode(!mode);
    const switchMode = ()=>{
        lidaMode();
        if(mode){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");
        }
    }

    return (
        <>
            {/* Sidebar */}
            <nav className={sidebar ? "sidebar" : "sidebar close"}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <i className="fa-brands fa-pied-piper logo" />
                        </span>
                        <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
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
                            <li className="nav-link true">
                                <a href="/">
                                    <i className="fa-solid fa-clipboard icon" />
                                    <span className="text nav-text">Title</span>
                                </a>
                                <button className="trash">
                                    <i className="fa-solid fa-trash-can icon" />
                                </button>
                            </li>
                            {/* Create */}
                            <li className="nav-link true">
                                <a href="/">
                                    <i className="fa-solid fa-plus icon" />
                                    <span className="text nav-text">Create</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Logout */}
                    <div className="bottom-content">
                        <li>
                            <a href="/">
                                <i className="fa-solid fa-right-from-bracket icon" />
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                        {/* Dark and Light mode */}
                        <li className="mode true">
                            <div className="sun-moon">
                                <i className="fa-solid fa-moon moon icon" />
                                <i className="fa-solid fa-sun sun icon" />
                            </div>
                            <span className="mode-text text">{mode?"Light mode":"Dark mode"}</span>
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

export default Titles;