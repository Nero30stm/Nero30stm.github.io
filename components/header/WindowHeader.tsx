import React from "react";
import {BackButton} from "../../src/ui/BackButton";
import {mainStatePage} from "../../stores/common/MainStatePage";

export const WindowHeader: React.FC<{ children: string | React.ReactNode, className?: string }> = ({ className, children }) => {
    return (
        <header className="added-inf-header">
            <BackButton/>
            {children}
        </header>
    )
}