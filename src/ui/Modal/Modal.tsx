import {modalModel} from "../../../stores/common/ModalModel";
import { observer } from "mobx-react";
import React from "react";


export const Modal = observer(():any => {
    const modal = modalModel;
    console.log('opened')

    return (
        modal.isOpenedModal &&
        <div className={'popup-container'}>
            <div
                className={'popap-background'}
                onClick={e => {
                    modal.closeModal()
                }}
            />
            <div className='popup-content'>
                {modal.component}
            </div>

        </div>

    );
})