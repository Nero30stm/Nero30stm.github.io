import React, {useEffect} from "react";
import {MainHeader} from "../../components/header/MainHeader";
import {NavPanel} from "../../components/navigation/NavigationPanel";
import PreferensisPage from "./PreferensisPage/PreferensisPage";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import AdditionInformationList from "./AdditionInf/AdditionInformationList";
import AppStore, {storeInstance} from "../../stores/AppStore";
import {observer} from "mobx-react";
//import Calendar from "../../src/ui/Form/Calendar";
import {action, makeObservable, observable} from "mobx";
import {mainStatePage} from "../../stores/common/MainStatePage";
import {modalModel} from "../../stores/common/ModalModel";
import PhotoModel from "../../components/PhotoModal";


const UserDashboard = observer(() => {
    let profile = storeInstance.profile
    const modal = modalModel;
    console.log(storeInstance.mainInf.photo)

    return(
        <div className="body main-information">
            <section id="main">
                <MainHeader/>
                <h1>Braim</h1>
                <NavPanel/>
                <main className="main-area">
                    <div className="main-inf">
                        <div className="user-inf-img">
                            <button className="img-addition"
                            onClick={() => modal.openModal(<PhotoModel img={storeInstance.mainInf.photo}/>)}>
                                {storeInstance.mainInf.photo ?
                                    <img src={storeInstance.mainInf.photo}/>:
                                    <span className="icon"></span>
                                }
                            </button>
                            <div className="user-inf-container">
                                <div className="user-inf">
                                    <span className="">{profile.initFullName}</span>
                                    <div className="country">
                                        <span className="flag"></span>
                                        <span className="">Краснодар</span>
                                    </div>
                                </div>
                                <div className="star-container active">
                                    <span className="star"></span>
                                    <span className="stars-count">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars-swap-container">
                            <div className="stars-labels">
                                <div className="star-container active">
                                    <span className="star"></span>
                                    <span className="stars-count">2</span>
                                </div>
                                <div className="star-container">
                                    <span>3000</span>
                                    <span className="star"></span>
                                    <span className="stars-count">3</span>
                                </div>
                            </div>
                            <label className="slider-container">
                                <div className="slider-track">
                                    <div className="main-track">
                                        <div className="slider-runnable-track"></div>
                                    </div>
                                    <span className="swapper">2500</span>
                                </div>
                                <input type="range" className="swap-slider"/>
                            </label>
                        </div>
                        <div className="stars-swap-container">
                            <div className="stars-labels">
                                <div className="star-container active">
                                    <span className="friends"></span>
                                    <span className="">Друзья: 0</span>
                                </div>
                                <div className="star-container">
                                    <span className="observers"></span>
                                    <span className="">Подписчики: 0</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className="bordered-item">
                        <span className="">скрыть подробности</span>
                    </button>
                    <div className="addition-inf">
                        <AdditionInformationList/>
                    </div>

                </main>
            </section>
            <section className="added">
                {mainStatePage.additionComponent}
            </section>
            <nav className="main-navigation-mobile">
                <button className="item">
                    <span className="burger"></span>
                </button>
                <ul className="nav-mobile-list">
                    <li>
                        <a className="friends" href="#"></a>
                    </li>
                    <li>
                        <a className="messenger" href="#"></a>
                    </li>
                    <li>
                        <a className="pref" href="#"></a>
                    </li>
                </ul>
                <button className="item">
                    <span className="points"></span>
                </button>
            </nav>
        </div>
    )
})

export default UserDashboard