import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	AOS.init();
	const [navExpand, setNavExpand] = useState(false);
	return (
		<Router>
			<Header onClick={() => setNavExpand(true)} />
			{navExpand && <Navigation onClick={() => setNavExpand(false)} />}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
