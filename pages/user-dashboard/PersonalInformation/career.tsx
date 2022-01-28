import React, {useEffect, useState} from "react";
import {BackButton} from "../../../src/ui/BackButton";
import {WindowHeader} from "../../../components/header/WindowHeader";
import {Input, DateInput, RadioCheckInput} from "../../../src/ui/Form/Inputs";
import {storeInstance} from "../../../stores/AppStore";
import {ButtonForSelection, FirstButton, GradientButton, ThirdButton} from "../../../src/ui/Buttons";
import {Calendar} from "../../../src/ui/Form/Calendar";
import {modalModel} from "../../../stores/common/ModalModel";
import {Modal} from "../../../src/ui/Modal/Modal";
import {observer} from "mobx-react";
import {CompaniesSelect} from "../../../src/ui/Form/CompaniesSelect";
import {career} from "../../../stores/accaunt/profile/CareerFormModel";

const CareerInformation = observer(() => {
    let profile = storeInstance.mainInf
    const modal = modalModel;
    const [isFormOpened, setFormOpened] = useState(false)

    async function handleSubmit (event : any){
        event.preventDefault();
        setFormOpened(false)
        let res = await career.setCareer();
        if (res === true) {
            career.reset()
        }
    }

    return (
        <>
            <div className="added-information-window">
                <WindowHeader>
                    {<span className='blue'>карьера</span>}
                </WindowHeader>

                <main className="notification-main">
                    <div className="vertical-10gap-container">
                        {profile.careerInf && profile.careerInf.map( (career: any) =>
                            <div className="secondary-button spaced">
                                <span>{career.company.name}</span>
                                <button className="attention" onClick={() => profile.deleteCareer(career.id)}> удалить</button>
                            </div>
                        )}
                        {isFormOpened &&
                            <form className="career-form" onSubmit={handleSubmit} id='newCareer'>
                                <ButtonForSelection
                                    text={career.company.name || (<>название компании <span className="arrow-right"/></>)}
                                    onClick={() => {
                                        modal.openModal(<CompaniesSelect object={career} placeholder="Введите категорию"/>);
                                    }}
                                />
                                <DateInput
                                    field={career.fields.dateFrom}
                                    placeholder={'--.--.----'}
                                    func={() => {
                                       // modal.openModal(<Calendar field={career.fields.dateFrom}/>);
                                    }}
                                />
                                <DateInput
                                    field={career.fields.dateTo}
                                    placeholder={'--.--.----'}
                                    func={() => {
                                       // modal.openModal(<Calendar field={career.fields.dateFrom}/>);
                                    }}
                                />
                            </form>
                        }
                        {!isFormOpened &&
                        <ThirdButton
                            type={"submit"}
                            form="newCareer"
                            onClick={(e: any) => {
                                !isFormOpened ? (setFormOpened(true)) : handleSubmit(e)
                            }}
                            text={(profile.careerInf.length === 0 && !isFormOpened) ? "Добавить" : "Добавить еще"}
                        />
                        }
                        { isFormOpened &&
                        <GradientButton
                            type={"submit"}
                            form="newCareer"
                            disabled={false}
                            onClick={(e: any) => {!isFormOpened && handleSubmit(e)}}
                            text={"Сохранить"}
                        />
                        }
                    </div>
                </main>
            </div>

        </>
    )
})

export default CareerInformation