import {storeInstance} from "../../../stores/AppStore";
import {mainStatePage} from "../../../stores/common/MainStatePage";
import PersonalInformation from "../../../pages/user-dashboard/PersonalInformation/PersonalInformation";
import React from "react";

const InfBlock = (additionalComponent: any, information: any) => {
    return (
        <li className="inf-block-container">
            <div className="bordered-item iconed">
                <div className="spaced">
                    <span className="text">{storeInstance.mainInf.mainInf.firstname}</span>
                    <button
                        className="edit"
                        onClick={() => mainStatePage.setAdditionComponent(<PersonalInformation/>)}
                    />
                </div>
            </div>
            <div className="counter">
                <span className="text">+20</span>
            </div>
        </li>
    )
}