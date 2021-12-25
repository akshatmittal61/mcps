import React from "react";
import { Link } from "react-router-dom";
import favicon from "../images/favicon.png";

const Header = () => {
	const headNav = [
		{
			icon: "home",
			text: "Home",
			link: "/",
		},
		{
			icon: "chat",
			text: "Feedback",
			link: "/feedback",
		},
		{
			icon: "account_circle",
			text: "Login",
			link: "/login",
		},
		{
			icon: "contact_support",
			text: "Contact Us",
			link: "/contact",
		},
	];
	return (
		<header className="header">
			<div className="header-left">
				<div className="header-left-image">
					<img
						src={favicon}
						alt="Meerut City Public School"
						className="header-left-image__img"
					/>
				</div>
				<div className="header-left-content">
					<span className="header-left-content__title">
						Meerut City Public School
					</span>
					<span className="header-left-content__subtitle">
						Affiliated to C.B.S.E.
					</span>
				</div>
			</div>
			<div className="header-right">
				<nav className="header-right-nav">
					<ul className="header-right-nav__ul">
						{headNav.map((item, index) => (
							<li className="header-right-nav__li" key={index}>
								<Link to={item.link} className="icon">
									<div className="header-right-nav__li__icon">
										<span className="material-icons">
											{item.icon}
										</span>
									</div>
									<div className="header-right-nav__li__text">
										{item.text}
									</div>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="header-right-burger">
					<button className="icon">
						<span className="material-icons">menu</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
