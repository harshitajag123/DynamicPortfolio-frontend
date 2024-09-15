import React from "react";
import { Form, Input } from "antd";
import { message } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, HideLoading } from "../../redux/rootSlice";
import baseURL from "../../utils/url";

function AdminContact() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);

	const onFinish = async (values) => {
		//console.log(values);
		try {
			dispatch(showLoading());
			const response = await axios.post(`${baseURL}/api/portfolio/update-contact`, {
				...values,
				_id: portfolioData.contact._id,
			});

			console.log("Updated ContactData: ", response.data);
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
				initialValues={portfolioData.contact}>
				

				<Form.Item name="name" label="  Name">
					<input placeholder=" Name" />
				</Form.Item>

				<Form.Item name="email" label="Email">
					<input placeholder="Email" />
				</Form.Item>

				<Form.Item name="mobile" label="Phone Number">
					<input placeholder="Phone Number" />
				</Form.Item>

				<Form.Item name="country" label="Country ">
					<input placeholder="Country" />
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

export default AdminContact;
