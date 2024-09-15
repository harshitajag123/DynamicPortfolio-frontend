import React from "react";
import { Form, Input } from "antd";
import { message } from "antd";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { showLoading, HideLoading } from "../../redux/rootSlice";
import baseURL from "../../utils/url";

function AdminIntro() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);

	const onFinish = async (values) => {
		//console.log(values);
		try {
			dispatch(showLoading());
			const response = await axios.post(
				`${baseURL}/api/portfolio/update-intro`,
				{
					...values,
					_id: portfolioData.intro._id,
				}
			);

			console.log("Updated IntroData: ", response.data);
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
				initialValues={portfolioData.intro}>
				<Form.Item name="welcomeText" label="Welcome Text">
					<input placeholder="Welcome Text" />
				</Form.Item>

				<Form.Item name="firstName" label=" First Name">
					<input placeholder="First Name" />
				</Form.Item>

				<Form.Item name="lastName" label="Last Name ">
					<input placeholder="Last Name" />
				</Form.Item>

				<Form.Item name="caption" label="Caption ">
					<input placeholder="Caption" />
				</Form.Item>

				<Form.Item name="description" label="Description ">
					<textarea placeholder="Description" />
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

export default AdminIntro;
