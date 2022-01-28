import {observer} from "mobx-react";
import React from "react";
import {SelectInput} from "./SelectInput";
import FieldModel from "../../../../stores/form/FieldModel";
import {TSelectInput} from "./Base";

type TProps = {
    field: FieldModel<any>;
} & TSelectInput;

export const StaticSelectInput = observer(({ field, options, ...rest }: TProps) => {
    let currentOption = undefined

    options.map((option: any) => {
        if (option.value === field.value) {
            currentOption = option
        }
    })

    function handleOnChange(option: any) {
        if (field) {
            field.set(option.value);
        }
        currentOption = option;
    }

    return (
        <SelectInput
            isValid={(value: string, repeatValue: string) => {
                return field.validator.isValid;
            }}
            options={options}
            value={currentOption}
            onChange={handleOnChange}
            {...rest}
        />
    );
});