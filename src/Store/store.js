import { createStore } from "redux";
import { wetherReducer } from "./reducer/reducer";

const store = createStore(
    wetherReducer
)

export default store;