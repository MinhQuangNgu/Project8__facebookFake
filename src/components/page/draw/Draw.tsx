import React, { useState } from "react";
import "./style.scss";
import DrawCard from "./DrawCard";
const Draw: React.FC = () => {
	const [item, setItem] = useState(false);
	return (
		<div className="draw">
			<div className="draw__wrap">
				<div>
					<DrawCard />
					<DrawCard />
					<DrawCard />
				</div>
			</div>
			{item && (
				<div className="draw__viewAll">
					<div className="draw__viewAll__a">
						<div className="draw__viewAll__image">
							<img
								src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
								alt="Ảnh"
							/>
						</div>
						<div className="draw__viewAll__comment"></div>
					</div>
				</div>
			)}
			{item && (
				<div
					onClick={() => {
						setItem(false);
					}}
					className="draw__viewAll__abs"
				></div>
			)}
		</div>
	);
};

export default Draw;
