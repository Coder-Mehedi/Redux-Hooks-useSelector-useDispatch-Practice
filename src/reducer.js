// Reducer
function reducer(state, { type, payload }) {
	switch (type) {
		case "ADD_NINJA":
			return {
				...state,
				ninjas: [...state.ninjas, payload],
			};
		case "DELETE_NINJA":
			return {
				...state,
				ninjas: state.ninjas.filter((ninja) => ninja.id !== payload),
			};
		default:
			return state;
	}
}

export default reducer;
