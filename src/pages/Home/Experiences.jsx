import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
//import { experiences } from "../../resources/experiences";

function Experiences() {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const { portfolioData } = useSelector((state) => state.root);

	// Check if portfolioData exists and has experiences
	if (
		!portfolioData ||
		!portfolioData.experience ||
		portfolioData.experience.length === 0
	) {
		return <div>Loading...</div>; // Render a loader or message here while the data is being fetched
	}

	//const { experience } = portfolioData;
	const experience = portfolioData.experience;

	return (
		<div>
			<SectionTitle title="Experience" />

			<div className="flex py-10 gap-20 sm:flex-col">
				{/* for selecting period */}
				<div className="flex flex-col gap-6 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
					{experience.map((exp, index) => (
						<div
							key={exp._id}
							className=" cursor-pointer"
							onClick={() => {
								setSelectedItemIndex(index);
							}}>
							<h1
								className={`text-xl font-semibold px-4  ${
									selectedItemIndex === index
										? `text-tertiary border-tertiary border-l-4 -ml-[3px] py-3 bg-[#1976545f] `
										: ` text-normal`
								}`}>
								{exp.period}
							</h1>
						</div>
					))}
				</div>

				{/* for display respective content */}
				<div className="flex flex-col gap-5 ">
					<h1 className="text-secondary text-2xl">
						{experience[selectedItemIndex].title}
					</h1>
					<h1 className="text-tertiary text-2xl">
						{experience[selectedItemIndex].company}
					</h1>
					<p className="text-normal">
						{experience[selectedItemIndex].description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Experiences;
