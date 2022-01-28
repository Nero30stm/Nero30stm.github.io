import * as React from 'react';
import '../styles/main.scss';
import {inject, observer} from "mobx-react";
import AppStore from "../stores/AppStore";

import App from "next/app";
import { Provider } from "mobx-react";
import {Modal} from "../src/ui/Modal/Modal";
import {modalModel} from "../stores/common/ModalModel";
import {Calendar} from "../src/ui/Form/Calendar";

type TInject = {
    appStore: AppStore;
};

/*const _app = inject(({ appStore }: { appStore: AppStore }) => ({
    appStore,
}))(
    observer((props: any) => {
        const injected = () => props as TInject;
        const { appStore } = injected();
        const router = useRouter()

        useEffect(() => {

            appStore.initialize(router);
        }, []);


        if (appStore.isPending && SessionModel.getToken()) {
            // Лоадер ожидания загрузки данных
            return (
                <div>
                    <h1>Pending</h1>
                </div>
            );
        }

    })
);*/

class MyApp extends App {
    state = {
        appStore: new AppStore()
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider appStore={this.state.appStore}>
                <div className="theme theme--default">
                    <Component {...pageProps} />

                        <Modal/>

                </div>
            </Provider>
        );
    }
}

export default MyApp


