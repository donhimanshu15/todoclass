import Reducer from "./TodoReducer";
import { combineReducers} from "redux";

const CombineReducers=combineReducers({
    reducer: Reducer,
});
export default CombineReducers;