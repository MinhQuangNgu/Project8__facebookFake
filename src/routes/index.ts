import Detail from "../components/detail/Detail";
import Layout from "../components/layout/Layout";
import Draw from "../components/page/draw/Draw";
import Home from "../components/page/home/Home";
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
		path: "/draw",
		element: Draw,
		Layout: Layout,
	},
	{
		path: "/quiz/detail/:slug",
		element: QuizDetail,
		Layout: Layout,
	},
];
