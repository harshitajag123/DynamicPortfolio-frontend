import { useSelector } from "react-redux";
import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
	const { portfolioData } = useSelector((state) => state.root);
	const { contact } = portfolioData;
	console.log(contact);

	return (
		<div>
			<SectionTitle title="Contact Me" />

			<div className="flex sm:flex-col items-center justify-between">
				<div className="flex flex-col gap-1">
					<h1 className="text-tertiary text-md">{"{"}</h1>
					{Object.keys(contact).map(
						(key) =>
							key !== "_id" && (
								<h1 className="ml-5" key={key}>
									<span className="text-tertiary text-md">{key} : </span>
									<span className="text-tertiary text-md">{contact[key]}</span>
								</h1>
							)
					)}
					<h1 className="text-tertiary text-md">{"}"}</h1>
				</div>

				<div className="h-[500px] w-[500px] sm:h-[400px] sm:w-[400px]">
					<lottie-player
						src="https://lottie.host/fd953886-1efd-4f62-b188-691c6f5f0467/VnVMc368et.json"
						background="##FFFFFF"
						speed="1"
						loop
						autoplay
						mode="normal"></lottie-player>
				</div>
			</div>
		</div>
	);
}

export default Contact;
