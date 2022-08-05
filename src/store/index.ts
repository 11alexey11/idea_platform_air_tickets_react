import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { ticketsReducer } from "./tickets";

const reducers = combineReducers({
    tickets: ticketsReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));