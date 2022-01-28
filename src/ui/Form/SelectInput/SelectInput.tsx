import {colourStyles, TSelectInput} from "./Base";
import Select from "react-select";
import React from "react";

export const SelectInput = ({ placeholder, onChange, options, value, ...props }: TSelectInput) => {

    return (
        <div className="selectMain">
            <Select
                name="colors"
                className="select"
                classNamePrefix="select"
                placeholder={placeholder}
                options={options}
                onChange={onChange}
                value={value}
                styles={colourStyles}
            ></Select>
        </div>
    );
};
