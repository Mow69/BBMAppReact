import AppReducer from "./AppReducer";

import { persistCombineReducers} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const allReducers = persistCombineReducers(persistConfig, {
    app: AppReducer
});

export default allReducers;