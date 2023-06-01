import { legacy_createStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = legacy_createStore(reducer);

export default store;