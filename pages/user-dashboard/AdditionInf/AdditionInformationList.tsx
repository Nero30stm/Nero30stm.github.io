import React from "react";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import {mainStatePage} from "../../../stores/common/MainStatePage";
import CareerInformation from "../PersonalInformation/career";
import {storeInstance} from "../../../stores/AppStore";
import {observer} from "mobx-react";
import SkillsInformation from "../PersonalInformation/skills";
import InterestsInformation from "../PersonalInformation/interests";

const AdditionInformationList = observer(() => {
    function returnDate(value: any) {
        let date = new Date(value);
        return date.toISOString().substring(0,4);
    }

    return (
        <section className="person-information-list">
            <ul className="items-list">
                <li className="inf-block-container">
                    <div className="bordered-item iconed">
                        <div className="spaced">
                            <span className="text">Личная информация</span>
                            <button
                                className="edit"
                                onClick={() => mainStatePage.setAdditionComponent(<PersonalInformation/>)}
                            />
                        </div>
                        {storeInstance.mainInf.mainInf.isFull &&(
                            <div className="inf-block-container">
                                <span className="text">{storeInstance.mainInf.mainInf.firstname}</span>
                            </div>
                        )}
                    </div>
                    {!storeInstance.mainInf.mainInf.isFull &&(
                        <div className="counter">
                            <span className="text">+20</span>
                        </div>
                    )}

                </li>
                <li>
                    <div className="bordered-item">
                        <div className="spaced">
                            <span className="text">Навыки</span>
                            <button
                                className="edit"
                                onClick={() => mainStatePage.setAdditionComponent(<SkillsInformation/>)}
                            />
                        </div>
                        {storeInstance.mainInf.skillsInf &&(
                            <ul className="mini-chips-list added-inf-block-content">
                                {storeInstance.mainInf.skillsInf.map((skill: any) =>
                                    (<li className="chip">
                                        <span>{skill.name}</span>
                                    </li>)
                                )}
                            </ul>
                        )}
                    </div>
                    {storeInstance.mainInf.skillsInf.length == 0 &&
                    <div className="counter">
                        <span className="text">+20</span>
                    </div>
                    }
                </li>
                <li>
                    <div className="bordered-item">
                        <div className="spaced">
                            <span className="text">Интересы</span>
                            <button
                                className="edit"
                                onClick={() => mainStatePage.setAdditionComponent(<InterestsInformation/>)}
                            />
                        </div>
                        {storeInstance.mainInf.interestsInf &&(
                            <ul className="mini-chips-list added-inf-block-content">
                                {storeInstance.mainInf.interestsInf.map((interest: any) =>
                                    (<li className="chip">
                                        <span>{interest.name}</span>
                                    </li>)
                                )}
                            </ul>
                        )}
                    </div>
                    {storeInstance.mainInf.interestsInf.length == 0 &&
                    <div className="counter">
                        <span className="text">+20</span>
                    </div>
                    }
                </li>
                <li>
                    <div className="bordered-item iconed">
                        <div className="spaced">
                            <span className="text">Образование</span>
                            <span className="edit"></span>
                        </div>
                    </div>
                    <div className="counter">
                        <span className="text">+20</span>
                    </div>
                </li>
                <li className="inf-block-container">
                    <div className="bordered-item iconed">

                        <div className="spaced">
                            <span className="text">Карьера</span>
                            <button
                                className="edit"
                                onClick={() => mainStatePage.setAdditionComponent(<CareerInformation/>)}
                            />
                        </div>
                        {storeInstance.mainInf.careerInf &&(
                            <ul className="companies-list">
                                {storeInstance.mainInf.careerInf.map((career: any) =>
                                    (<li className="career-list-item">
                                        <span>{career.company.name}</span>
                                        <div className="date-block">
                                            {returnDate(career.dateFrom) + '-' + returnDate(career.dateTo)}
                                        </div>
                                    </li>)
                                )}
                            </ul>
                        )}
                    </div>
                    {storeInstance.mainInf.careerInf.length == 0 &&
                    <div className="counter">
                        <span className="text">+20</span>
                    </div>
                    }
                </li>

            </ul>
        </section>
    )
})

export default AdditionInformationList