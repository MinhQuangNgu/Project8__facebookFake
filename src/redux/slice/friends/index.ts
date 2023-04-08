import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
	name: "friends",
	initialState: {
		friends: [],
	},
	reducers: {
		loadFriend: (state, action) => {
			state.friends = action.payload;
		},
	},
});

export const { loadFriend } = friendSlice.actions;
export default friendSlice.reducer;
