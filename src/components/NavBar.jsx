// import React from "react";

// function NavBar({
  

// 	aboutRef,
// 	experienceRef,
// 	projectsRef,
// 	certificationsRef,
// 	contactRef,
// }) {
// 	// Scroll to the respective section when clicked
// 	const handleScroll = (ref) => {
// 		ref.current.scrollIntoView({ behavior: "smooth" });
// 	};

// 	return (
// 		<>
// 			<div
// 				className="p-5 bg-primary flex  sm:hidden    "
// 				>
// 				<div className="flex w-full mb-[7px] ml-64 justify-between items-end">
// 					<h1
// 						className="text-secondary cursor-pointer font-semibold p-6 text-xl sm:text-3xl my-0 py-0"
// 						onClick={() => handleScroll(aboutRef)}>
// 						About
// 					</h1>

// 					<h1
// 						className="text-secondary cursor-pointer font-semibold p-7 text-xl sm:text-3xl my-0 py-0"
// 						onClick={() => handleScroll(experienceRef)}>
// 						Experience
// 					</h1>

// 					<h1
// 						className="text-secondary cursor-pointer font-semibold p-6 text-xl sm:text-3xl my-0 py-0"
// 						onClick={() => handleScroll(projectsRef)}>
// 						Projects
// 					</h1>

// 					<h1
// 						className="text-secondary cursor-pointer font-semibold p-6 text-xl sm:text-3xl my-0 py-0"
// 						onClick={() => handleScroll(certificationsRef)}>
// 						Certifications
// 					</h1>

// 					<h1
// 						className="text-secondary cursor-pointer font-semibold p-6 text-xl sm:text-3xl my-0 py-0"
// 						onClick={() => handleScroll(contactRef)}>
// 						Contact Me
// 					</h1>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default NavBar;




import React from "react";

function NavBar({
	aboutRef,
	experienceRef,
	projectsRef,
	certificationsRef,
	contactRef,
}) {
	// Scroll to the respective section when clicked
	const handleScroll = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="bg-primary p-5 flex flex-col lg:flex-row lg:justify-between lg:w-full lg:mb-0 sm:hidden">
			<div className="flex lg-flex-col  lg:w-full lg:items-center">
				<h1
					className="text-secondary cursor-pointer font-semibold p-4 text-xl lg:text-lg lg:w-1/5"
					onClick={() => handleScroll(aboutRef)}>
					About
				</h1>

				<h1
					className="text-secondary cursor-pointer font-semibold p-4 text-xl lg:text-lg lg:w-1/5"
					onClick={() => handleScroll(experienceRef)}>
					Experience
				</h1>

				<h1
					className="text-secondary cursor-pointer font-semibold p-4 text-xl lg:text-lg lg:w-1/5"
					onClick={() => handleScroll(projectsRef)}>
					Projects
				</h1>

				<h1
					className="text-secondary cursor-pointer font-semibold p-4 text-xl lg:text-lg lg:w-1/5"
					onClick={() => handleScroll(certificationsRef)}>
					Certifications
				</h1>

				<h1
					className="text-secondary cursor-pointer font-semibold p-4 text-xl lg:text-lg lg:w-1/5"
					onClick={() => handleScroll(contactRef)}>
					Contact
				</h1>
			</div>
		</div>
	);
}

export default NavBar;
