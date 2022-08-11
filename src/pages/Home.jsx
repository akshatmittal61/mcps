import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import favicon from "../images/favicon.png";
import _1 from "../images/gallery/1.jpg";
import _2 from "../images/gallery/2.jpg";
import _3 from "../images/gallery/3.jpg";
import _4 from "../images/gallery/4.jpg";
import _5 from "../images/gallery/5.jpg";
import _6 from "../images/gallery/6.jpg";
import _7 from "../images/gallery/7.jpg";
import _8 from "../images/gallery/8.jpg";
import _9 from "../images/gallery/9.jpg";
import _24 from "../images/gallery/24.jpg";
import _59 from "../images/gallery/59.jpg";
import _63 from "../images/gallery/63.jpg";
import _68 from "../images/gallery/68.jpg";

const Home = () => {
	const images = [_1, _2, _24, _3, _4, _59, _5, _6, _63, _7, _8, _9, _68];
	const [showImg, setShowImg] = useState(Array(images.length).fill(false));
	const vh = window.innerHeight / 100;
	useEffect(() => {
		window.scrollTo(0, 12.5 * vh);
		setShowImg(() => {
			const newArr = [...showImg];
			newArr[0] = true;
			return newArr;
		});
	}, []);
	const [imgToShow, setImgToShow] = useState(0);
	const [pause, setPause] = useState(false);
	const handleImg = (a) => {
		if (a === -1) setPause(!pause);
		else setImgToShow(a);
	};
	useEffect(() => {
		if (!pause) {
			setTimeout(() => {
				handleImg(imgToShow == images.length - 1 ? 0 : imgToShow + 1);
			}, 5000);
		}
	});
	useEffect(() => {
		let newArr = Array(images.length).fill(false);
		newArr[imgToShow] = true;
		setShowImg(newArr);
	}, [imgToShow]);
	return (
		<section className="home">
			<section className="home-hero">
				<div className="carousel home-hero-carousel">
					<div className="carousel-content">
						{images.map((item, index) => (
							<div
								className="carousel-content-container"
								key={index}
								style={{
									padding: showImg[index] ? "0.5rem" : "0",
									width: showImg[index] ? "95%" : "0",
									transition:
										"all var(--transition-time-long) ease-in-out",
								}}
							>
								<div
									className="carousel-content__box"
									style={{
										backgroundImage: `url(${item})`,
										width: showImg[index] ? "95vw" : "0",
										transition:
											"all var(--transition-time-long) ease-in-out",
									}}
								></div>
							</div>
						))}
					</div>
					<div className="carousel-controls">
						<button
							className="icon carousel-controls-button carousel-controls-back"
							onClick={() =>
								handleImg(
									imgToShow === 0
										? images.length - 1
										: imgToShow - 1
								)
							}
						>
							<span className="material-icons">chevron_left</span>
						</button>
						<button
							className="icon carousel-controls-button carousel-controls-back"
							onClick={() => handleImg(-1)}
						>
							<span className="material-icons">
								{pause ? "play_arrow" : "pause"}
							</span>
						</button>
						<button
							className="icon carousel-controls-button carousel-controls-forward"
							onClick={() =>
								handleImg(
									imgToShow === images.length - 1
										? 0
										: imgToShow + 1
								)
							}
						>
							<span className="material-icons">
								chevron_right
							</span>
						</button>
					</div>
				</div>
			</section>
			<section className="home-intro">
				<div className="home-intro-logo">
					<img
						src={favicon}
						alt="Meerut City Public School"
						className="home-intro-logo__img"
						data-aos="zoom-in"
					/>
				</div>
				<div className="home-intro-name">
					<span className="home-intro-name__text">
						Meerut City Public School
					</span>
				</div>
				<div className="home-intro-moto">
					<span className="home-intro-moto__text">
						Satyameve Jayatay
					</span>
				</div>
			</section>
			<ScrollToTop startAfter={75 * vh} />
		</section>
	);
};

export default Home;
