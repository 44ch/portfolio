import React from "react";
import './MobileMenuStyle.css'


export default function MobileMenu() {
    return (
        <div id="page" className="site">
            <div className="container">
                <nav>
                <input type="checkbox" id="link"/>
                <label for="link" className="link"></label>
                    <ul>
                        <li><a href="#"></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}