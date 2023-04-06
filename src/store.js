import { createStore } from "redux";
import countReducer from "./reducer/count";

function configureStore(state = { count: 0 }) {
  return createStore(countReducer, state);
}

export default configureStore;
