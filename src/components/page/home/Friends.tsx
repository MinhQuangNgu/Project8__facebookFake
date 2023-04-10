import React, { useContext } from "react";
import "./style.scss";
import { TouchContext } from "./Home";
const Friends: React.FC = () => {
	const { setTouch } = useContext(TouchContext);
	return (
		<div
			onClick={() => {
				if (setTouch) {
					setTouch("friends");
				}
			}}
			className="header__infor friends"
		>
			<div className="friends__wrap">
				<div className="friends__wrap__1">
					<div className="friends__header">Người liên hệ</div>
					<div className="friends__body">
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
						<div className="friends__body__items">
							<div className="friends__body__items__image">
								<img
									src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
									alt="Ảnh"
								/>
								<div className="friends__body__items__active"></div>
							</div>
							<div className="friends__body__items__name">
								Nguyễn Minh Quang
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Friends;
