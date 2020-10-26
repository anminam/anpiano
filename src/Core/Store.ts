import pianoReducer from "Core/piano/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ piano: pianoReducer });
let store: any;

// 추후 디버거 생성
store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export type RootState = ReturnType<typeof rootReducer>;
