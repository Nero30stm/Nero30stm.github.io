import React from "react";
import Link from 'next/link'
import {storeInstance} from "../../stores/AppStore";
import Image from 'next/image'
//import userIcon from '/public/images/header/user-icon.png';

export const MainHeader = () => {
    let profile = storeInstance.profile

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

                        <span className="user-name">{profile.fields.firstname._value}</span>
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


            </div>
        </header>
    )
}