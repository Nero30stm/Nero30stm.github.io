import React, {useEffect, useState} from "react";
import {BackButton} from "../../../src/ui/BackButton";
import {WindowHeader} from "../../../components/header/WindowHeader";
import {Input, DateInput, RadioCheckInput} from "../../../src/ui/Form/Inputs";
import {storeInstance} from "../../../stores/AppStore";
import {FirstButton, GradientButton} from "../../../src/ui/Buttons";
import {Calendar, CalendarModel} from "../../../src/ui/Form/Calendar";
import {modalModel} from "../../../stores/common/ModalModel";
import {Modal} from "../../../src/ui/Modal/Modal";
import {observer} from "mobx-react";
import {ObjectSelect, UniversalSelect} from "../../../src/ui/Form/SelectInput/AsyncSelectInput";
import {StaticSelectInput} from "../../../src/ui/Form/SelectInput/StaticSelectInput";
import {SexOptions} from "../../../src/ui/Form/SelectInput/StaticOptions";
import {fetchCityOptions, fetchCountryOptions, fetchRegionOptions} from "../../../src/requests/user/fetchOptions";
import {StatusOptions} from "../../../src/ui/Form/SelectInput/StaticOptions";
import {mainStatePage} from "../../../stores/common/MainStatePage";
import {fetchStatusOptions, findStaticOptions, fetchDisabilityOptions} from "../../../src/requests/user/fetchStaticOptions";



const PersonalInformation = observer(() => {
    let profile = storeInstance.profile
    const modal = modalModel;

    const [statusOptions, setStatusOptions] = useState([])
    const [disabilityOptions, setDisabilityOptions] = useState([])

    //let i = findStaticOptions(fetchStatusOptions)
    //let j = findStaticOptions(fetchDisabilityOptions)

    //findStaticOptions(fetchStatusOptions).then(res => setStatusOptions(res))
    //findStaticOptions(fetchDisabilityOptions).then(res => setDisabilityOptions(res))

    useEffect(() => {
        findStaticOptions(fetchStatusOptions).then(res => {
            console.log(res)
            setStatusOptions(res)
        })
    }, [])
    useEffect(() => {
        (findStaticOptions(fetchDisabilityOptions)).then(res => {
            setDisabilityOptions(res)
        })
    }, [])

    async function handleSubmit (event : any){
        event.preventDefault();
        let res = await profile.setProfile();
        console.log(res)

        if (res === true) {
            console.log('изменено')
        }
    }

    return (
        <>
            <div className="added-information-window">
                <WindowHeader>
                    {<span className='blue'>личная информация</span>}
                </WindowHeader>

                <main className="notification-main">
                    <div className="vertical-10gap-container">
                        <span>Если ты заполнишь это поле, то получишь возможности общаться с людьми, получать бонусы</span>
                        <form className="enter-form" onSubmit={handleSubmit}>
                            <Input
                                field={profile.fields.lastname}
                                type={'text'}
                                placeholder={'Фамилия'}
                            />
                            <Input
                                field={profile.fields.firstname}
                                type={'text'}
                                placeholder={'Имя'}
                            />
                            <Input
                                field={profile.fields.patronymic}
                                type={'text'}
                                placeholder={'Отчество'}
                            />
                            <DateInput
                                field={profile.fields.birthDate}
                                placeholder={'--.--.----'}
                                func={() => {
                                    const calendar = new CalendarModel(profile.fields.birthDate)
                                    modal.openModal(<Calendar field={profile.fields.birthDate} calendar={calendar}/>);
                                }}
                            />
                            <Input
                                field={profile.fields.login}
                                type={'text'}
                                placeholder={'Логин'}
                            />
                            <StaticSelectInput
                                options={SexOptions}
                                field={profile.fields.sex}
                                placeholder="Пол"
                            />

                            <StaticSelectInput
                                options={statusOptions}
                                field={profile.fields.personStatusId}
                                placeholder="Статус"
                            />
                            <ObjectSelect
                                fetchOptions={fetchCountryOptions}
                                field={profile.fields.country}
                                placeholder={'Страна'}
                            />
                            <ObjectSelect
                                fetchOptions={fetchRegionOptions}
                                field={profile.fields.region}
                                placeholder={'Регион'}
                                forOptions={profile.fields.country.value.wikiDataId || profile.fields.country._value.wikiDataId}
                            />
                            <ObjectSelect
                                fetchOptions={fetchCityOptions}
                                field={profile.fields.city}
                                placeholder={'Город'}
                                forOptions={
                                    {
                                        country: profile.fields.country.value.wikiDataId || profile.fields.country._value.wikiDataId,
                                        region: profile.fields.region.value.wikiDataId || profile.fields.region._value.wikiDataId,
                                    }
                                }
                            />
                            <RadioCheckInput
                                label={'Наличие инвалидности'}
                                field={profile.fields.disability}
                                id={'dis'}
                            />
                            {
                                profile.fields.disability.value &&
                                    <>

                                        <StaticSelectInput
                                            options={disabilityOptions}
                                            field={profile.fields.disabilities}
                                            placeholder="Зрение"
                                        />
                                    </>
                            }
                            <GradientButton
                                type={"submit"}
                                disabled={profile.disabled}
                                text={"Сохранить"}
                                onClick={(e: any) => {handleSubmit(e)}}
                            />
                        </form>
                    </div>
                </main>
            </div>

        </>
    )
})

export default PersonalInformation