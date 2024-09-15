import React from 'react'

function Footer() {
  return (
		<div className="py-10">
			<div className="h-[1px] w-full bg-gray-700"></div>

			<div className="flex sm:flex-col items-center justify-center mt-10 opacity-80">
				<h1 className="text-normal">Designed and Developed By</h1>
				<h className="text-normal">
					<pre>
						<span className="text-tertiary"> Harshita Jagtap</span>
					</pre>
				</h>
			</div>
		</div>
	);
}

export default Footer