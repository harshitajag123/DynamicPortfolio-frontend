import React from "react";
import { Form, Input } from "antd";
import { message } from "antd";
import axios from "axios";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { showLoading, HideLoading } from "../../redux/rootSlice";
import baseURL from "../../utils/url";

function AdminAbout() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);
	// Define skills state
	const [skills, setSkills] = useState(portfolioData.about.skills.join(", "));

	const onFinish = async (values) => {
		//console.log(values);
		try {
			dispatch(showLoading());
			const response = await axios.post(
				`${baseURL}/api/portfolio/update-about`,
				{
					...values,
					skills: skills.split(",").map((skill) => skill.trim()), // Convert string to array
					_id: portfolioData.about._id,
				}
			);

			console.log("Updated About Data: ", response.data);
			dispatch(HideLoading());
			if (response.data.success) {
				message.success(response.data.message);
			} else {
				message.error(response.data.message);
			}
		} catch (error) {
			dispatch(HideLoading());
			message.error(error.message);
		}
	};
	return (
		<div>
			<Form
				onFinish={onFinish}
				layout="vertical"
				className="font-bold text-xl"
				initialValues={{
					...portfolioData.about,
					skills: skills,
				}}>
				<Form.Item name="lottieURL" label="lottie URL">
					<input placeholder="Lottie URL" />
				</Form.Item>

				<Form.Item name="description1" label=" Description 1">
					<input placeholder="Description" />
				</Form.Item>

				<Form.Item name="description2" label="Description 2">
					<input placeholder="Description" />
				</Form.Item>

				<Form.Item name="skills" label="Skills ">
					<input
						placeholder="Enter skills separated by commas"
						value={skills}
						onChange={(e) => setSkills(e.target.value)}
					/>
				</Form.Item>

				<div className="flex justify-end w-full">
					<button
						type="submit"
						className="px-5 py-2 bg-primary font-semibold text-normal rounded-md">
						Save
					</button>
				</div>
			</Form>
		</div>
	);
}

export default AdminAbout;

//https://lottie.host/570829a2-19f9-4ad5-9309-161501bf6321/UMwZE98cvq.json  --developer

//https://lottie.host/embed/7fecf4e9-74e2-44a5-9507-63c10abde4f7/fbrXZWeCUv.json

//https://lottie.host/47d76788-82a5-4c28-94c1-d73d7bb36978/3gHHYYL50A.json

//--chemical student
