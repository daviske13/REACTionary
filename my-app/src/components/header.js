import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a className="active" href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
