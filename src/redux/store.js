import { createStore } from "redux";
import { contactsReducers } from "./reducers/contacts";

// this is createting for storeing purpose directly expoet get reducer from  reducers file
export const store = createStore(contactsReducers);
