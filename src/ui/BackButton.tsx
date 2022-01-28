import React from "react";
import {mainStatePage} from "../../stores/common/MainStatePage";

export const BackButton = () => {
    return (
        <button type="button" className='back-button' onClick={() => mainStatePage.resetAdditionComponent()}>
            <span className="arrow-left"></span>
            Закрыть
        </button>
    )
}