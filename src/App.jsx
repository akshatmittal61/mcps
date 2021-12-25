import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const App = () => {
	const [navExpand, setNavExpand] = useState(false);
	return (
		<Router>
			<Header onClick={() => setNavExpand(true)} />
			{navExpand && <Navigation onClick={() => setNavExpand(false)} />}
			<main></main>
			<Footer />
		</Router>
	);
};

export default App;
