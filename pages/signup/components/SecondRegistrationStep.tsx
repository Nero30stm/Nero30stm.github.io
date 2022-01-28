import {observer} from "mobx-react";
import * as React from "react";
import {NumberInput} from "../../../src/ui/Form/Inputs";
import {action, reaction} from "mobx";
import {storeInstance} from "../../../stores/AppStore";
import {signUpState} from "../../../stores/signUPState";
import ChooseNextStep from "./ChooseNextStep";

const SecondRegistrationStep = observer((props: any) => {

    let reg = storeInstance.confirm

    function handleSubmit() {
        signUpState.setAdditionComponent(<ChooseNextStep/>)
    }

    reaction(() => reg.response === true,
        _=> handleSubmit())

    return (
            <form className="code-form">

                <NumberInput
                    field={reg.fields[0]}
                />
                <NumberInput
                    field={reg.fields[1]}
                />
                <NumberInput
                    field={reg.fields[2]}
                />
                <div className='number-input'>
                    <span>-</span>
                </div>
                <NumberInput
                    field={reg.fields[3]}
                />
                <NumberInput
                    field={reg.fields[4]}
                />
                <NumberInput
                    field={reg.fields[5]}
                />
            </form>
    )
})

export default SecondRegistrationStep