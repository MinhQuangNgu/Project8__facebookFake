import React from "react";
import "./style.scss";
import Header from "./Header";
import { children } from "../../interface";
const Layout: React.FC<children> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
