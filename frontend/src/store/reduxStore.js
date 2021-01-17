import { composeWithDevTools } from "redux-devtools-extension";

import { createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

export const store = createStore(userReducer, composeWithDevTools());
