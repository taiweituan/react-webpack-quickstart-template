import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="header navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <div className="navigation__brand">
                    <a className="navigation__link" href="#">React Starter</a>
                </div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a className="navigation__link btn btn-light " href="#home">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}