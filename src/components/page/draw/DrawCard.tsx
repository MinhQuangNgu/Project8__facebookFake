import React, { useState } from "react";
interface props {
	width: string;
	margin?: boolean;
}
const DrawCard: React.FC<props> = ({ width, margin }) => {
	const [heart, setHeart] = useState(false);
	return (
		<div
			style={margin ? { width: width } : { width: width, margin: 0 }}
			className="draw__items"
		>
			<div className="draw__items__container">
				<img
					src="https://img6.thuthuatphanmem.vn/uploads/2022/02/14/background-3d-dep-cho-zoom_022130840.jpg"
					alt="Ảnh"
				/>
				<div className="draw__items__love">
					💞 <i>120k</i>
				</div>
				<div className="draw__items__hover">
					<div
						onClick={() => {
							setHeart(!heart);
						}}
					>
						{!heart ? (
							<i className="fa-regular fa-heart icons__a"></i>
						) : (
							<i
								style={{ color: "red" }}
								className="fa-solid fa-heart icons__a"
							></i>
						)}
					</div>
					<div>
						<i className="fa-solid fa-expand icons__a"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DrawCard;
