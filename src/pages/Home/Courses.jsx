import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";
import { useSelector } from "react-redux";
function Courses() {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const { portfolioData } = useSelector((state) => state.root);
	const { certification } = portfolioData; //here in data we have certification instead of courses so in mapping, courses are changed to certification
	return (
		<div>
			<SectionTitle title="Certifications" />

			<div className="flex py-10 gap-20 sm:flex-col">
				{/* for selecting course */}
				<div className="flex flex-col gap-6 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
					{certification.map((course, index) => (
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
								{course.title}
							</h1>
						</div>
					))}
				</div>

				{/* for display respective content */}
				<div className="flex   gap-10 sm:flex-col">
					<div className="flex flex-col gap-5 ">
						<h1 className="text-secondary font-medium text-2xl">
							{certification[selectedItemIndex].title}
						</h1>

						<p className="text-normal ">
							{certification[selectedItemIndex].description}
						</p>
						<span className="font-medium text-[#5dc49eef]">Visit : </span>
						<a
							href={certification[selectedItemIndex].link}
							target="_blank"
							className="break-words sm:max-w-full w-full">
							<p className="text-normal  font-medium overflow-hidden sm:overflow-wrap break-words  ">
								{certification[selectedItemIndex].link}
							</p>
						</a>
					</div>
					<img
						src={certification[selectedItemIndex].image}
						alt="course"
						className="w-80 h-52"
					/>
				</div>
			</div>
		</div>
	);
}

export default Courses;
