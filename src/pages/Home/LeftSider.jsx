import React from "react";

function LeftSider() {
	return (
		<div className="fixed left-0 bottom-0 px-10  sm:static">
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col gap-3 sm:flex-row sm: -mt-5 sm:mb-2">
					{/* <i class="ri-facebook-circle-line text-gray-400"><a href=""></a></i> */}

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
