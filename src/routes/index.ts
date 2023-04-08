import Detail from "../components/detail/Detail";
import Layout from "../components/layout/Layout";
import Home from "../components/page/home/Home";
import { router } from "../interface";

export const publicRouter: router[] = [
	{
		path: "/",
		element: Home,
		Layout: Layout,
	},
	{
		path: "/:slug",
		element: Detail,
		Layout: Layout,
	},
];
