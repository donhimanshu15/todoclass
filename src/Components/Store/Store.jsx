import CombineReducers from "../Reducers/CombineReducer";
import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

export const Store=createStore(CombineReducers,composeWithDevTools());
