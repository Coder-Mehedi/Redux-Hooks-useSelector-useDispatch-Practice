export const addNinjaAction = (ninja) => ({
	type: "ADD_NINJA",
	payload: ninja,
});

export const deleteNinjaAction = (id) => {
	return { type: "DELETE_NINJA", payload: id };
};
