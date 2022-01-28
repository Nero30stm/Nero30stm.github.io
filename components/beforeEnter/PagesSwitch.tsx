import React from "react";
import Link from "next/link";

export const PagesSwitch = () => {

    return (
        <div className='buttons-container'>
            <Link href="/signup" ><a className='simple-link'>Регистрация</a></Link>
            <Link href="/auth" ><a className='simple-link'>Войти</a></Link>
        </div>
    )
};