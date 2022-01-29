import React, {useEffect, useState} from "react";
import {modalModel} from "../../../stores/common/ModalModel";
import {TextInput} from "./Inputs";
import API from "../../requests/_axios";
import {response} from "express";

export async function fetchSkillsOptions(inputValue: string) {
    //console.log(props)
    return API.get<any>('/user/skill',   { params: { name: inputValue } }).then(
        (response) => {
            console.log(response)
            return response.data.skills
        },
    )
}

export const SkillsSelect = ({ placeholder, object, ...rest }: any) => {
    const [options, setOptions] = useState([]);
    const [current, setCurrent] = useState('Р');

    const handleOnChange = (value: any) => {
        setCurrent(value);
    }

    function handleOnSelect(v: any) {
        object.hydrate(v)
        //object.company = v
        modalModel.closeModal();
    }

    useEffect(() => {
        fetchSkillsOptions(current).then(res => {
            if (res.length > 0)
                setOptions(res)
            else {
                setOptions([{id: 1, name: current}])
                //options.push({id: 1, name: current})
            }
        })
        console.log(options)
    },[current])

    return (
        <div className="popup-content-container">
            <div className="popup-header">
                <TextInput
                    onSetChange={handleOnChange}
                    placeholder={placeholder}
                    {...rest}
                />
                <button className="icon-button close" type="button" onClick={() => modalModel.closeModal()}/>
            </div>
            <ul className='popup-content-list'>
                {options && options.map((option: any) =>
                    <div className="popup-content-list-item" onClick={() => handleOnSelect(option)}>
                        <span > {option.name}</span>
                    </div>
                )}
            </ul>
        </div>
    )
}