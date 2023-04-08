import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {
			name: "",
			token: "",
			image: "",
		},
	},
	reducers: {
		isLogin: (state, action) => {
			state.user = action.payload;
		},
		isLogout: (state, action) => {
			state.user = {
				name: "",
				token: "",
				image: "",
			};
		},
	},
});

export const { isLogin, isLogout } = authSlice.actions;
export default authSlice.reducer;
