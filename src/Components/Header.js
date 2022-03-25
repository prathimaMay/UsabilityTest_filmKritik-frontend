//Header file to display in every page of the application

import React from "react";

const Header = props => {
    return (
        <div className="Header">
            <img src="/filmKritik.jpg" alt="filmKritik Logo" id="Header-img" />
            <h3 className="Header-name">filmKritik</h3>
        </div>
    );
}
export default Header;

