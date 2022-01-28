import React from "react";

export const Header = () => {
    return (
        <header className="main-header">
            <div className="logo-container">
                <a href="#" className="main-logo">
                    <img alt="logo" src={require("../../public/images/header/logo.svg").default} />
                </a>
                <div className="switch-container">
                    <span className="moon"></span>
                    <label className="switch">
                        <input type="checkbox"/>
                            <span className="slider round"></span>
                    </label>
                    <span className=" sun"></span>
                    <span className="eye"></span>
                </div>

            </div>
            <div className="user-pref-container">
                <div className="user-container">
                    <div className="user">
                        <img className="user-icon" alt="user-icon"
                             src={require("../../public/images/header/user-icon.png").default} />
                            <span className="user-name">Сергей</span>
                    </div>
                    <div className="bell-theme-container">
                        <div className="switch-container">
                            <span className="moon"></span>
                            <label className="switch">
                                <input type="checkbox"/>
                                    <span className="slider round"></span>
                            </label>
                            <span className=" sun"></span>
                        </div>
                        <div className="bell-container">
                            <div className="bell-point-container">
                                <span className="bell"></span>
                                <div className="bell-point"></div>
                            </div>
                            <span className="notification-count">+1</span>
                        </div>
                    </div>
                </div>
                <a className="button-link pref-container">
                    <span className="pref"></span>
                    <span>Настройки</span>
                </a>
            </div>
        </header>
    )
}