import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { showLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import { message } from "antd";

import { Form, Modal } from "antd";
import baseURL from "../../utils/url";
function AdminExperiences() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);
	const { experience } = portfolioData || {};
	const [showAddEditModel, setShowAddEditModel] = useState(false);
	const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
	// Ant Design Form instance for controlling the form
	const [form] = Form.useForm();

	//update / add experience
	const onFinish = async (values) => {
		try {
			dispatch(showLoading());
			let response;
			if (selectedItemForEdit) {
				response = await axios.put(
					`${baseURL}/api/portfolio/update-experience`,
					{
						...values,
						_id: selectedItemForEdit._id,
					}
				);
			} else {
				response = await axios.post(
					`${baseURL}/api/portfolio/add-experience`,
					values
				);
			}

			

			console.log("Updated Experience Data: ", response.data);
			setShowAddEditModel(false);
			dispatch(HideLoading());
			dispatch(ReloadData(true));

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

	//delete experience
	const onDelete = async (item) => {
		try {
			dispatch(showLoading());
			const response = await axios.post(
				`${baseURL}/api/portfolio/delete-experience`,
				{
					_id: item._id,
				}
			);
			dispatch(HideLoading());
			if (response.data.success) {
				message.success(response.data.message);
				dispatch(HideLoading());
				dispatch(ReloadData(true));
			} else {
				message.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			dispatch(HideLoading());
			message.error(error.message);
		}
	};

	const handleModalOpen = (experienceItem) => {
		setSelectedItemForEdit(experienceItem);
		// Reset the form before opening the modal, and set values only if editing
		if (experienceItem) {
			form.setFieldsValue(experienceItem);
		} else {
			form.resetFields(); // Clear the form when adding a new experience
		}
		setShowAddEditModel(true);
	};

	return (
		<div>
			<div className="flex justify-end">
				<button
					className="bg-primary text-white px-5 py-2 rounded-md"
					onClick={() => {
						setSelectedItemForEdit(null);
						setShowAddEditModel(true);
						handleModalOpen(null);
					}}>
					Add Experience
				</button>
			</div>

			<div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
				{experience.map((experience) => (
					<div className="shadow-md rounded-md border p-5 border-gray-400 flex-col mt-5 ">
						<h1 className="text-primary text-2xl font-bold">
							{experience.period}{" "}
						</h1>
						<hr />
						<h1 className="text-black  pt-2">
							Company : {experience.company}{" "}
						</h1>
						<h1 className="  pt-2"> Role: {experience.title} </h1>
						<h1 className="  pt-2">Description: {experience.description} </h1>
						<div className="flex justify-end gap-3 pt-4">
							<button
								className="text-white rounded-md bg-secondary px-5 py-2 "
								onClick={() => {
									onDelete(experience);
								}}>
								Delete
							</button>

							<button
								className="text-white rounded-md bg-primary px-5 py-2"
								onClick={() => {
									setSelectedItemForEdit(experience);
									setShowAddEditModel(true);
									handleModalOpen(experience);
								}}>
								Edit
							</button>
						</div>
					</div>
				))}
			</div>

			<Modal
				open={showAddEditModel}
				footer={null}
				title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
				onCancel={() => setShowAddEditModel(false)}>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					// initialValues={selectedItemForEdit}
				>
					<Form.Item name="period" label="Period">
						<input placeholder="Period" />
					</Form.Item>

					<Form.Item name="company" label="Company">
						<input placeholder="Company" />
					</Form.Item>

					<Form.Item name="title" label="Role">
						<input placeholder="Role Title" />
					</Form.Item>

					<Form.Item name="description" label="Description">
						<textarea placeholder="Description" />
					</Form.Item>

					<div className="flex justify-end gap-3 ">
						<button
							className="border-primary border rounded-md text-primary py-2 px-5 "
							onClick={() => {
								setShowAddEditModel(false);
							}}>
							Cancel
						</button>

						<button className="bg-primary text-white py-2 px-5 rounded-md">
							{selectedItemForEdit ? "Update" : "Add"}
						</button>
					</div>
				</Form>
			</Modal>
		</div>
	);
}

export default AdminExperiences;
