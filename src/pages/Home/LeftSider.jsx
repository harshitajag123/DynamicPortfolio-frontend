import React from "react";
//import { GoMoveToTop } from "react-icons/go";

function LeftSider({ headerRef }) {
	// Scroll to the top section when the arrow is clicked
	const handleScrollToTop = () => {
		headerRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="fixed left-0 bottom-0 px-10  sm:static">
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col gap-3 sm:flex-row sm: -mt-5 sm:mb-2">
					<div className="cursor-pointer">
						<i
							class="ri-arrow-up-wide-line text-gray-100 font-extrabold my-20 sm:hidden "
							onClick={handleScrollToTop}></i>
					</div>

					<a href="jagtapharshita4@gmail.com" target="_blank">
						<i class="ri-mail-line text-gray-400"></i>
					</a>

					<a href="https://www.linkedin.com/in/harshitajagtap/" target="_blank">
						<i class="ri-linkedin-box-fill text-gray-400"></i>
					</a>

					<a href="https://github.com/harshitajag123" target="_blank">
						<i class="ri-github-fill text-gray-400"></i>
					</a>
				</div>
				<div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
			</div>
		</div>
	);
}

export default LeftSider;
