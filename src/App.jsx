import React from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return (
		<Router>
			<Header />
            <main></main>
            <Footer />
		</Router>
	);
};

export default App;
