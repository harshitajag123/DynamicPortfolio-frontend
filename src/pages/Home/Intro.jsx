import React from "react";
import { useSelector } from "react-redux";

function Intro({ aboutRef }) {
	const { loading, portfolioData } = useSelector((state) => state.root);
	const { intro } = portfolioData;
	const { firstName, lastName, welcomeText, caption, description } = intro;

	// Scroll to the about section
	const handleScrollToAbout = () => {
		aboutRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 ">
			<h1 className="text-normal text-xl">{welcomeText || "Welcome!"}</h1>
			<h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
				{firstName || ""} {lastName || ""}
			</h1>
			<h1 className="text-5xl sm:text-2xl text-normal font-semibold">
				{caption || ""}
			</h1>

			<p className="text-normal w-3/4 ">{description || " "}</p>

			<button
				className=" border-2 border-tertiary text-tertiary py-3 px-5 rounded"
				onClick={handleScrollToAbout}>
				Get Started
			</button>
		</div>
	);
}

export default Intro;
