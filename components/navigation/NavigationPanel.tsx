import React from "react";

export const NavPanel = () =>{
    return (
        <nav className="main-navigation">
            <ul className="nav-list">
                <li className="active">
                    <a className="button-link">
                        <span className="profile"></span>
                        <span className="nav-item-name">Мой профиль</span>
                    </a>
                </li>
                <li className="">
                    <a className="button-link" href="#">
                        <span className="dashboard"></span>
                        <span className="nav-item-name">Дашборд</span>
                    </a>
                </li>
                <li className="">
                    <a className="button-link" href="#">
                        <span className="my-contacts"></span>
                        <span className="nav-item-name">Мои связи</span>
                    </a>
                </li>
                <li className="">
                    <a className="button-link" href="#">
                        <span className="messenger"></span>
                        <span className="nav-item-name">Мессенджер</span>
                    </a>
                </li>
                <li className="">
                    <a className="button-link" href="#">
                        <span className="achievements"></span>
                        <span className="nav-item-name">Достижения</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}