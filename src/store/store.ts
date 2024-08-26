import { createStore, applyMiddleware, compose, Middleware, AnyAction } from "redux";
import { RootState, persistedReducer } from "./reducers/rootReducer";
import { ThunkMiddleware, thunk } from "redux-thunk";
import { persistStore } from "redux-persist";

// @ts-ignore
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) : null || compose;
const middleware: Middleware<{}, RootState>[] = [thunk as ThunkMiddleware<RootState, AnyAction>];

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);
export { store, persistor };