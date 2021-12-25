import React from "react";
import { Link } from "react-router-dom";
import contact from "../assets/Contact.js";

const Footer = () => {
	const navs = [
		{
			link: "/academics",
			text: "Academics",
		},
		{
			link: "/rules",
			text: "Rules and Regulations",
		},
		{
			link: "/facilities",
			text: "Infrastructure and Facilities",
		},
		{
			link: "/extras",
			text: "Extra-Cirricular",
		},
		{
			link: "/achievements",
			text: "Achievements",
		},
		{
			link: "/gallery",
			text: "Photo Gallery",
		},
	];
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-top-links">
					<div className="footer-top-links__title">
						<span>Links</span>
					</div>
					<div className="footer-top-links__body">
						<ul className="footer-top-links__ul">
							{navs.map((item, index) => (
								<li
									className="footer-top-links__li"
									key={index}
								>
									<Link to={item.link}>{item.text}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="footer-top-map">
					<div className="footer-top-map__title">
						<span>Location</span>
					</div>
					<div className="footer-top-map__body">
						{/* <iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.7233090152054!2d77.68754541471542!3d28.965930182287455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65967d6ad27b%3A0xf392908addf7b649!2sMeerut%20City%20Public%20School!5e0!3m2!1sen!2sus!4v1640416957530!5m2!1sen!2sus"
							style={{
								width: "90%",
								height: "90%",
								border: "0",
							}}
							allowFullScreen
							loading="lazy"
							title="MCPS: Meerut City Public School, Madhavpuram, Meerut, Uttar Pradesh"
						></iframe> */}
					</div>
				</div>
				<div className="footer-top-contact">
					<div className="footer-top-contact__title">
						<span>Contact Us</span>
					</div>
					<div className="footer-top-contact__body">
						<ul className="footer-top-contact__ul">
							{contact.map((item, index) => (
								<li
									className="footer-top-contact__li"
									key={index}
									data-icon={item.icon}
								>
									<a
										href={item.link}
										className="footer-top-contact-box__link"
									>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<span>&copy; 2022 Meerut City Public School</span>
				<div className="footer-bottom__contact">
					Designed and developed by:
					<a href="https://akshatmittal61.github.io/akshatmittal61">
						Akshat Mittal
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
