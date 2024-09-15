import React from "react";
import SectionTitle from "../../components/SectionTitle";
//import { projects } from '../../resources/projects';
import { useState } from "react";
import { useSelector } from "react-redux";

function Projects() {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const { portfolioData } = useSelector((state) => state.root);
	const { projects } = portfolioData;
	console.log(projects);
	return (
		<div>
			<SectionTitle title="Projects" />

			<div className="flex py-10 gap-20 sm:flex-col">
				{/* for selecting period */}
				<div className="flex flex-col gap-6 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
					{projects.map((project, index) => (
						<div
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
								{project.title}
							</h1>
						</div>
					))}
				</div>

				{/* for display respective content */}
				<div className="flex item-center justify-center gap-10 sm:flex-col">
					<img
						src={projects[selectedItemIndex].image}
						alt="project"
						className="w-72 h-60"
					/>
					<div className="flex flex-col gap-5 ">
						<h1 className="text-secondary text-2xl">
							{projects[selectedItemIndex].title}
						</h1>
						<p className="text-normal">
							{projects[selectedItemIndex].description}
						</p>
						<a href={projects[selectedItemIndex].link} target="_blank">
							<p className=" text-[#5dc49eef] font-semibold">
								{projects[selectedItemIndex].link}
							</p>
						</a>

						{/* <p className="text-normal">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Exercitationem aut doloremque sint{" "}
						{projects[selectedItemIndex].description}
					</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
