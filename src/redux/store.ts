import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import friends from "./slice/friends";

export const store = configureStore({
	reducer: {
		auth: auth,
		friends: friends,
	},
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
