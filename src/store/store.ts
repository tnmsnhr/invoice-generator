import { createStore, applyMiddleware, compose } from "redux";
import { persistedReducer } from "./reducers/rootReducer";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";

// @ts-ignore
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) : null || compose;


const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);
export { store, persistor };