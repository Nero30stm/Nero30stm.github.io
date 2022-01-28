import React from "react";
import {GradientButton, ThirdButton} from "../../src/ui/Buttons";
import {CheckInput, Input} from "../../src/ui/Form/Inputs";

export const BeforeEnterLayout: React.FC<{ children: string | React.ReactNode, className?: string }> = ({ className, children }) => {

    return (
        <div className="enter-page">
            <div className="header">
                <a href="#" className="main-logo">
                    <img src={require('../../public/images/header/logo_registration.svg').default} alt="logo" />
                </a>
            </div>
            <div className="main-enter-form">
                <div className="enter-form-container">
                    {children}
                </div>
            </div>
        </div>
    )
};