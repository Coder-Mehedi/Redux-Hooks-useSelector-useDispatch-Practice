import { createStore } from "redux";
import reducer from "./reducer.js";

const initialState = {
	ninjas: [
		{ name: "Mehedi", age: 22, belt: "Black", id: 1 },
		{ name: "Sabuj", age: 22, belt: "Red", id: 2 },
	],
};
const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
