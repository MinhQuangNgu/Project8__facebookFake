import Layout from "../components/layout/Layout";
import Login from "../components/page/auth/Login";
import Register from "../components/page/auth/Register";
import Draw from "../components/page/draw/Draw";
import Friend from "../components/page/friend/Friend";
import Home from "../components/page/home/Home";
import QuizManager from "../components/page/manager/QuizManager";
import Profile from "../components/page/profile/Profile";
import Quiz from "../components/page/quiz/Quiz";
import QuizDetail from "../components/page/quiz/detail/QuizDetail";
import Watch from "../components/page/watch/Watch";
import { router } from "../interface";

export const publicRouter: router[] = [
	{
		path: "/",
		element: Home,
		Layout: Layout,
	},
	{
		path: "/watch",
		element: Watch,
		Layout: Layout,
	},
	{
		path: "/quiz",
		element: Quiz,
		Layout: Layout,
	},
	{
		path: "/login",
		element: Login,
		Layout: null,
	},
	{
		path: "/register",
		element: Register,
		Layout: null,
	},
	{
		path: "/draw",
		element: Draw,
		Layout: Layout,
	},
	{
		path: "/friends",
		element: Friend,
		Layout: Layout,
	},
	{
		path: "/:id",
		element: Profile,
		Layout: Layout,
	},
	{
		path: "/quiz/detail/:slug",
		element: QuizDetail,
		Layout: Layout,
	},
	{
		path: "/quiz/manager",
		element: QuizManager,
	},
];
