import * as React from 'react';
import {useRouter} from "next/router";
import {inject, observer} from "mobx-react";
import AppStore from "../stores/AppStore";
import { NextPage } from "next";
import {useEffect} from "react";
import Router from 'next/router'

type TInject = {
    appStore: AppStore;
};

async function f(store: any, router: any){
    await store.initialize();
    sessionStorage.setItem('access_token', router.query.access_token)
    console.log('isLogged' + store.session.isLogged)
    if (!store.session.isLogged) {
        router.push('auth')
    } else {
        router.push('user-dashboard')
    }
}

const Index: NextPage = inject("appStore")(
    observer((props: any) => {
        const injected = () => props as TInject;
        const { appStore } = injected();
        const router = useRouter()

        useEffect(():any => f(appStore, router), []);


        if (appStore.isPending ) {
            // Лоадер ожидания загрузки данных
            return (
                <div>
                    <h1>Pending</h1>
                </div>
            );
        }

        return (
            <div>
                <h1>sucsess</h1>
            </div>
        )

    })
);


/*const IndexPage: NextPage = inject("dataStore")(
    observer((props: Props) => {
        const dataStore = props.dataStore!;

        return (
            <Layout title="Home | Next.js + TypeScript Example">
                <h1>My first Medium article</h1>

                <p>{dataStore.title} 👋</p>

                <input
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dataStore.changeTitle(e.target.value)
                    }
                />
            </Layout>
        );
    })
);
*/
export default Index