import React from "react";
import {BackButton} from "../../../src/ui/BackButton";
import {WindowHeader} from "../../../components/header/WindowHeader";

const PreferensisPage = () => {
    return(
        <div className="added-information-window">
            <WindowHeader>
                {}
            </WindowHeader>
            <main className="notification-main">
                <ul className="round-buttons-list">
                    <li className="list-item">
                        <button className="round-button active">Общие</button>
                    </li>
                    <li className="list-item">
                        <button className="round-button ">Приватность</button>
                    </li>
                    <li className="list-item">
                        <button className="round-button ">Уведомления</button>
                    </li>

                </ul>
            </main>
        </div>
    )
}

export default PreferensisPage