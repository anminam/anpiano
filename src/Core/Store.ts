import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({piano:})
let store: any;
store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
