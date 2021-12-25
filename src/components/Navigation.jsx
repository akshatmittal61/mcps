import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordian from "./Accordian/Accordian";
import { Link } from "react-router-dom";

const Navigation = ({ onClick }) => {
	const navigations = [
		{
			title: "About Us",
			links: [
				{
					route: "/about",
					text: "About",
				},
				{
					route: "/vision",
					text: "Our vision and mission",
				},
				{
					route: "/messages",
					text: "Messages",
				},
			],
		},
		{
			title: "Academics",
			links: [
				{
					route: "/curriculam",
					text: "Curriculam",
				},
				{
					route: "/exam",
					text: "Examination System",
				},
			],
		},
		{
			title: "Rules and Regulation",
			links: [
				{
					route: "/admissions",
					text: "Admissions",
				},
				{
					route: "/fees",
					text: "Fees Structure",
				},
			],
		},
		{
			title: "Infrastructure / Facilities",
			links: [
				{
					route: "/facilities#library",
					text: "Library",
				},
				{
					route: "/facilities#complab",
					text: "Computer Library",
				},
				{
					route: "/facilities#building",
					text: "Building",
				},
				{
					route: "/facilities#class",
					text: "Classes",
				},
				{
					route: "/facilities#staff",
					text: "Staff Rooms",
				},
				{
					route: "/facilities#conference",
					text: "Conference Hall",
				},
				{
					route: "/facilities#auditorium",
					text: "Auditorium",
				},
				{
					route: "/facilities#art",
					text: "Art Rook",
				},
				{
					route: "/facilities#dance",
					text: "Dance Room",
				},
				{
					route: "/facilities#music",
					text: "Music Room",
				},
				{
					route: "/facilities#reception",
					text: "Reception",
				},
			],
		},
	];
	AOS.init();
	return (
		<section className="navigation">
			<div className="navigation-box" data-aos="fade-left">
				<div className="navigation-head">
					<div className="navigation-head-content">
						<span className="navigation-head-content__text">
							Navigation
						</span>
					</div>
					<div className="navigation-head-close">
						<button
							className="navigation-head-close__button icon"
							onClick={onClick}
						>
							<span className="material-icons">close</span>
						</button>
					</div>
				</div>
				<div className="navigation-body">
					{navigations.map((item, index) => (
						<Accordian
							summary={item.title}
							details={
								<div className="navigation-body-accordian__container">
									{item.links.map((a, id) => (
										<Link
											to={a.route}
											className="navigation-body-accordian__content"
											key={id}
										>
											{a.text}
										</Link>
									))}
								</div>
							}
							key={index}
						/>
					))}
					<div className="navigation-body-link">
						<Link
							to="/achievemnets"
							className="navigation-body__link"
						>
							Achievemnets
						</Link>
					</div>
					<div className="navigation-body-link">
						<Link
							to="/gallery"
							className="navigation-body__link"
						>
							Photo & Video Gallery
						</Link>
					</div>
					<div className="navigation-body-link">
						<Link
							to="/downloads"
							className="navigation-body__link"
						>
							Downloads
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navigation;
