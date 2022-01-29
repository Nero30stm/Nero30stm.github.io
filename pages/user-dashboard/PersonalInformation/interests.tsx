import {storeInstance} from "../../../stores/AppStore";
import {modalModel} from "../../../stores/common/ModalModel";
import React, {useState} from "react";
import {interests} from "../../../stores/accaunt/profile/InterestsFormModel";
import {WindowHeader} from "../../../components/header/WindowHeader";
import {ButtonForSelection, GradientButton, ThirdButton} from "../../../src/ui/Buttons";
import {CompaniesSelect} from "../../../src/ui/Form/CompaniesSelect";
import {DateInput} from "../../../src/ui/Form/Inputs";
import {Calendar} from "../../../src/ui/Form/Calendar";
import {StaticSelectInput} from "../../../src/ui/Form/SelectInput/StaticSelectInput";
import {SkillsSelect} from "../../../src/ui/Form/SkillsSelect";
import {observer} from "mobx-react";
import {InterestsSelect} from "../../../src/ui/Form/InterestsSelect";

const InterestsInformation = observer(() => {
    let profile = storeInstance.mainInf
    const modal = modalModel;
    const [isFormOpened, setFormOpened] = useState(true)

    async function handleSubmit (event : any){
        event.preventDefault();
        //setFormOpened(false)
        let res = await interests.setInterests();
        if (res === true) {
            interests.reset()
        }
    }

    return (
        <>
            <div className="added-information-window">
                <WindowHeader>
                    {<span className='blue'>Навыки</span>}
                </WindowHeader>

                <main className="notification-main">
                    <div className="vertical-10gap-container">
                        <ul className="chips-list">
                            {profile.interestsInf && profile.interestsInf.map( (interest: any) =>
                                <div className="chip-deleting">
                                    <span>{interest.name}</span>
                                    <button className="close" onClick={() => profile.deleteInterest(interest.id)}/>
                                </div>
                            )}
                        </ul>
                        {isFormOpened &&
                        <form className="career-form" onSubmit={handleSubmit} id='newCareer'>
                            <ButtonForSelection
                                text={interests.interest.name || (<>добавить категорию <span className="arrow-right"/></>)}
                                onClick={() => {
                                    modal.openModal(<InterestsSelect object={interests} placeholder="Введите категорию"/>);
                                }}
                            />
                        </form>
                        }
                        {!isFormOpened &&
                        <ThirdButton
                            type={"submit"}
                            form="newCareer"
                            onClick={(e:any) => {
                                //!isFormOpened ? (setFormOpened(true)) : handleSubmit(e)
                            }}
                            text={(profile.interestsInf.length === 0 && !isFormOpened) ? "Добавить" : "Добавить еще"}
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

export default InterestsInformation