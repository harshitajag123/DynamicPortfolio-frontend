import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";

function Home() {
	const { portfolioData } = useSelector((state) => state.root);
	return (
		<>
			<Header />
			


			{portfolioData && (
				<div className="bg-primary px-40 sm:px-5">
					<Intro />
					<About />
					<Experiences />
					<Projects />
					<Courses />
					<Contact />
					<Footer />
					<LeftSider />
				</div>
			)}
		</>
	);
}

export default Home;
