import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import FieldModel from "../../../stores/form/FieldModel";

export type TTextInput = {
    placeholder?: string;
    isValid?: boolean;
    length?: number;
    value?: string;
    className?: string;
    onSetChange?: (value: any) => any;
    field?: any
    label?: string
    type?: string
};

export const TextInput = ({ placeholder, isValid, className, length, onSetChange, ...props }: TTextInput) => {
    const [showError, setShowError] = useState(false)

    return (
        <>
            <label className="classic-input">
            <input
                {...props}
                onChange={({ target }) => {
                    onSetChange(target.value);
                }}
                maxLength={length}
                placeholder={placeholder}
                onBlur={() => setShowError(true)}
            />
            </label>
            { showError && props.field && props.field.validator.firstError &&
                <span className="attention">{props.field.validator.firstError}</span>
            }
        </>
    );
};



type TProps = {
    field: FieldModel<string>;
    func?: any
} & TTextInput;

export const Input = observer(({ field, ...props }: TProps) => {

    function handleOnChange(value: any) {
        field.set(value);
    }

    return (
        <TextInput
            isValid={(value: string, repeatValue: string) => {
                return field.validator.isValid;
            }}
            onSetChange={handleOnChange}
            {...props}

            value={field.value? field.value : ''}
            field={field}
        />
    );
});

export const CheckInput = observer(({field, label, validator, id}: any) => {

    return (
        <div className="check-container">
            <div >
                <input id={id} type='checkbox'
                       onChange={event =>
                           field.set(event.target.checked)
                       }
                />
                <label htmlFor={id}>
                    <span></span>
                    {label}

                </label>
            </div>
        </div>
    )
});

export const RadioCheckInput = observer(({field, label, value, validator, id}: any) => {

    return (
        <div className="radio-container">
            <div >
                <input id={id} type='checkbox'
                       onChange={event => {
                           field.set(event.target.checked)
                       }
                       }
                       checked={field.value}
                />
                <label htmlFor={id}>
                    {label}
                    <div className={'before-container'}>
                    <span></span>
                    </div>

                </label>
            </div>
        </div>
    )
});

export const NumberInput = observer(({ field, ...props }: TProps) => {

    const handleDown = (e: any) => {
        field.set('')
    }

    const handleUp = (e : any) => {
        e.target.value = e.target.value.replace(/[^0-9\-]/, '');
        if (e.target.value.length > 1) {
            e.target.value = e.target.value[0];
        }
        //validator.setField(field, e.target.value)
        console.log(field.value)
        field.set(e.target.value)
    };

    return (
        <div className="number-input">
            <label>
                <input type='text' max='9'
                       onKeyDown={event => handleDown(event)}
                       onKeyUp={event => handleUp(event)} className='' placeholder='0'/>
            </label>
        </div>
    )
})

export const DateInput = observer(({ field, func, ...props }: TProps) => {

    const onChange = (value: any) => {
        field.set(value)
    }

    return (
        <label className="classic-input">
            <input
                type={"date"}
                {...props}
                onChange={({ target }) => {
                    onChange(target.value);
                }}
                value={field.value? field.returnDate : ''}
            />
            <button className="icon-button calendar"
                    type='button'
                    onClick={() => func()}
            />
            <span>{field.validator.firstError}</span>
        </label>
    );
})

