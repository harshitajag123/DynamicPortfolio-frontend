import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
//const { TabPane } = Tabs;

function Admin() {
	const { portfolioData } = useSelector((state) => state.root);
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			window.location.href = "/admin-login";
		}
	}, []);

	const items = [
		{
			key: "1",
			label: "Intro",
			children: <AdminIntro />,
		},
		{
			key: "2",
			label: "About",
			children: <AdminAbout />,
		},

		{
			key: "3",
			label: "Experiences",
			children: <AdminExperiences />,
		},
		{
			key: "4",
			label: "Projects",
			children: <AdminProjects />,
		},
		{
			key: "5",
			label: "Certifications",
			children: <AdminCourses />,
		},
		{
			key: "6",
			label: "Contact",
			children: <AdminContact />,
		},
	];
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<>
			<div>
				<Header />
				<div className="flex justify-between items-center">
					<h1 className="text-3xl px-5 pt-5 font-semibold text-primary">
						Portfolio Admin
					</h1>
					<h1
						className="text-xl text-center p-2 mx-5 mt-5 cursor-pointer  bg-secondary font-semibold rounded-md  text-normal"
						onClick={() => {
							localStorage.removeItem("token");
							window.location.href = "/admin-login";
						}}>
						Logout
					</h1>
				</div>
			</div>

			{portfolioData && (
				<div className="p-5">
					<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
				</div>
			)}
		</>
	);
}

export default Admin;
