import React, { useEffect, useState } from "react";
import "./style.scss";
import Header from "./Header";
import { children } from "../../interface";
import { useLocation } from "react-router-dom";
const Layout: React.FC<children> = ({ children }) => {
	const [type, setType] = useState<"" | "messager">("");
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div>
			<Header typeBig={type} setTypeBig={setType} />
			<div
				onClick={() => {
					setType("");
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Layout;
