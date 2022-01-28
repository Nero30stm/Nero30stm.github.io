import {fetchCountryOptions} from "../../requests/user/fetchOptions";
import {UniversalSelect} from "./SelectInput/AsyncSelectInput";
import React, {useEffect, useState} from "react";
import {TextInput} from "./Inputs";
import API from "../../requests/_axios";
import {action, values, toJS} from "mobx";
import {modalModel} from "../../../stores/common/ModalModel";

export async function fetchCompanyOptions(inputValue: string) {
    //console.log(props)
    return API.get<any>('/user/dict/organization',   { params: { query: inputValue } }).then(
        (response) => {
            return response.data
        },
    )
}

export const CompaniesSelect = ({ placeholder, object, ...rest }: any) => {
    const [options, setOptions] = useState([]);
    const [current, setCurrent] = useState('Р');

    const handleOnChange = (value: any) => {
        setCurrent(value);
    }

    function handleOnSelect(v: any) {
        object.hydrateCompany(v)
        //object.company = v
        modalModel.closeModal();
    }

    useEffect(() => {
        fetchCompanyOptions(current).then(res => setOptions(res))
        //console.log(options)
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