import {observer} from "mobx-react";
import {observable} from "mobx";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import {handleInputChange} from "react-select/dist/declarations/src/utils";
import axios from "axios";
import AsyncSelect from 'react-select/async';
import FieldModel from "../../../../stores/form/FieldModel";
import {TTextInput} from "../Inputs";
import {TSelectInput, colourStyles} from "./Base";

type TProps = {
    field: FieldModel<any>;
    fetchOptions: any;
    forOptions? : any

} & TSelectInput;

export const AsyncSelectInput = ({ placeholder, onChange, options, value, handleloadOptions,  ...props }: TSelectInput) => {

    return (
        <div className="selectMain">
            <AsyncSelect
                className="select"
                classNamePrefix="select"
                placeholder={placeholder}
                options={options}
                onChange={onChange}
                value={value}
                loadOptions = {handleloadOptions}
                styles={colourStyles}
            ></AsyncSelect>
        </div>
    );
};


const setOptions  = (inputValue: any) => {
    let options: any = []
    inputValue.map((data: any) => {
        options.push({value: data.wikiDataId, label: data.name})
    })
    return options
}

export const UniversalSelect = observer(({ field, placeholder, fetchOptions, ...rest }: TProps) => {

    let currentOption
    const [option, setOption] = useState({})

    function handleOnChange(option: any) {
        setOption(option);
        console.log(option)
        field.set(option.value)
    }

    async function initValue() {
        if (field._value) {
            let request = await fetchOptions(field._value, rest.forOptions)
            return setOptions({value: request.data.wikiDataId, label: request.data.name})
        }
    }

    async function onInput(inputValue: string) {
        console.log(rest.forOptions)
        let options = await fetchOptions(inputValue, rest.forOptions)
        return setOptions(options.data.data)
    }

    useEffect(() =>
    {
        initValue()
    },[])

    return (

        <AsyncSelect
            name="colors"
            className="select"
            classNamePrefix="select"
            placeholder={placeholder}
            onChange={handleOnChange}
            value={option}
            loadOptions = {onInput}
            styles={colourStyles}
        ></AsyncSelect>
    )
});



const setObjectOptions  = (inputValue: any) => {
    let options: any = []
    inputValue.map((data: any) => {
        options.push({value: data.wikiDataId, label: data.name, obj: data})
    })
    return options
}

export const ObjectSelect = observer(({ field, placeholder, fetchOptions, ...rest }: TProps) => {

    const [currentOption, setCurrentOption] = useState({})
    const [option, setOption] = useState({})

    function handleOnChange(option: any) {
        setOption(option);
        console.log(option)
        field.set(option.obj)
    }

    async function initValue() {
        if (field._value) {
            return setOption({value: field._value.wikiDataId, label: field._value.name})
        }
    }

    async function onInput(inputValue: string) {
        let options = await fetchOptions(inputValue, rest.forOptions)
        return setObjectOptions(options.data.data)
    }

    useEffect(() =>
    {
        initValue()
    },[])

    return (

        <AsyncSelect
            name="colors"
            className="select"
            classNamePrefix="select"
            placeholder={placeholder}
            onChange={handleOnChange}
            value={option}
            loadOptions = {onInput}
            styles={colourStyles}
        ></AsyncSelect>
    )
});