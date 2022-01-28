import {observer} from "mobx-react";

export const FirstButton = observer(({text, type, validator, func}: any) => {
    return (
        <button className="gradient-button"
                type={type}
                onClick={() => func()}
        >{text}
        </button>
    )
})

export const GradientButton = observer(({text, type, disabled, form}: any) => {
    console.log(disabled)

    return (
        <button className="gradient-button"
            type={type}
            disabled={disabled}
                form={form || this}
            //onClick={() => validator.enroll()}
        >
            {text}
        </button>
    )
})

export const ThirdButton = observer(({text, type, onClick, validator}: any) => {

    return (
        <button className="secondary-button"
                type={type}
                onClick={onClick}
        >{text}
        </button>
    )
})

export const ButtonForSelection = observer(({text, type, onClick, validator}: any) => {

    return (
        <button className="secondary-button spaced"
                type={"button"}
                onClick={onClick}
        >
            {text}
        </button>
    )
})