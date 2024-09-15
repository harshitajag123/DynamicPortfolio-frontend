import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
const About = () => {
	const { loading, portfolioData } = useSelector((state) => state.root);
	const { about } = portfolioData;
	const { skills, lottieURL, description1, description2 } = about;
	return (
		<>
			<div>
				<SectionTitle title="About Me" />
				<div className="flex w-full items-center sm:flex-col ">
					<div className="h-[70vh] w-1/2 sm:w-full">
						<lottie-player
							src={lottieURL}
							background="transparent"
							speed="1"
							autoplay></lottie-player>
					</div>

					<div className="flex flex-col gap-5 w-1/2 sm:w-full">
						<p className="text-normal">{description1 || ""}</p>
						<p className="text-normal">{description2 || ""}</p>
					</div>
				</div>

				<div className="py-5 ">
					<h1 className="text-tertiary text-2xl font-semibold">
						Here are a few Technologies I've been working with recently :
					</h1>
					<div className="flex flex-wrap text-normal gap-10 mt-5 ">
						{skills.map((skill, index) => (
							<div className="border border-tertiary py-3 px-10 rounded">
								<h1 className="text-tertiary">{skill}</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

//https://lottie.host/570829a2-19f9-4ad5-9309-161501bf6321/UMwZE98cvq.json
