import React from "react";
import Link from "next/link";
import {signUpState} from "../../../stores/signUPState";
import CompanyRegistrationStep from "./CompanyRegistrationStep";
import ThirdRegistrationStep from "./ThirdRegistrationPage";


const ChooseNextStep = () => {

    return (
        <div className="choose-buttons-container">
            <span className="">Анкета</span>
            <button className="secondary-button" onClick={() => signUpState.setAdditionComponent(<ThirdRegistrationStep/>)}>Индивидуальный участник</button>
            <button className="secondary-button" onClick={() => signUpState.setAdditionComponent(<CompanyRegistrationStep/>)}>Юридическое лицо</button>
        </div>
    )
}

export default ChooseNextStep