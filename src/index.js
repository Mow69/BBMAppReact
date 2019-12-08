import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import 'bootstrap';
import './components/css/styles.css';
import App from "./App";
import LoginControl from "./components/OldConnexion/LoginControl";
import Greeting from "./components/OldConnexion/Greeting";

import * as serviceWorker from './serviceWorker';


import { createStore} from "redux";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
import allReducers from "./reducers";
import AppContainer from "./containers/AppContainer";

const store = createStore(allReducers);
const persistor = persistStore(store, {});

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// ReactDOM.render(<LoginControl />, document.getElementById('root'));
//
//
// ReactDOM.render(
//     // Essayez de changer ça vers isLoggedIn={true} :
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );

// ReactDOM.render(<MainContainer />, document.getElementById('main-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


