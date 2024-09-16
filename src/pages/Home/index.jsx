import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { useRef } from "react";

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

	//const introRef = useRef(null);
	const headerRef = useRef(null);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const projectsRef = useRef(null);
	const certificationsRef = useRef(null);
	const contactRef = useRef(null);
	return (
		<>
			<Header />

			{portfolioData && (
				<div className="bg-primary px-40 sm:px-5">
					<div>
						<Intro aboutRef={aboutRef} />
					</div>

					<div ref={aboutRef}>
						<About />
					</div>

					<div ref={experienceRef}>
						<Experiences />
					</div>
					<div ref={projectsRef}>
						<Projects />
					</div>
					<div ref={certificationsRef}>
						<Courses />
					</div>
					<div ref={contactRef}>
						<Contact />
					</div>
					<Footer />
					<LeftSider headerRef={headerRef} />
				</div>
			)}
		</>
	);
}

export default Home;
