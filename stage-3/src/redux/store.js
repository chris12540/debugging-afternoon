import { createStore } from "redux";
import reducer from "./reducer";
import { applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
