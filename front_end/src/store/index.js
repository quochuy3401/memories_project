import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "../reducers";

const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeEnhancers));

export default store;
