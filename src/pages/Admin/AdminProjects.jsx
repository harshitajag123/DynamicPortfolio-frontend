import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { showLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import { message } from "antd";
import { Form, Modal } from "antd";
import baseURL from "../../utils/url";

function AdminProjects() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);
	const { projects } = portfolioData || {};
	const [showAddEditModel, setShowAddEditModel] = useState(false);
	const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
	const [form] = Form.useForm(); // Use Ant Design's form instance

	// Update form values when selectedItemForEdit changes
	useEffect(() => {
		if (selectedItemForEdit) {
			form.setFieldsValue(selectedItemForEdit); // Set the values in the form
		} else {
			form.resetFields(); // Reset the form if no item is selected
		}
	}, [selectedItemForEdit, form]);

	//update / add projects
	const onFinish = async (values) => {
		try {
			dispatch(showLoading());
			let response;
			if (selectedItemForEdit) {
				response = await axios.put(`${baseURL}/api/portfolio/update-project`, {
					...values,
					_id: selectedItemForEdit._id,
				});
			} else {
				response = await axios.post(
					`${baseURL}/api/portfolio/add-project`,
					values
				);
			}

			console.log("Updated Project Data: ", response.data);
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

	//delete Projects
	const onDelete = async (item) => {
		try {
			dispatch(showLoading());
			const response = await axios.post(
				`${baseURL}/api/portfolio/delete-project`,
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

	return (
		<div>
			<div className="flex justify-end">
				<button
					className="bg-primary text-white px-5 py-2 rounded-md"
					onClick={() => {
						setSelectedItemForEdit(null);
						setShowAddEditModel(true);
					}}>
					Add Project
				</button>
			</div>

			<div className="grid grid-cols-3 gap-5  sm:grid-cols-1 ">
				{projects.map((project) => (
					<div
						key={project._id}
						className="shadow-md rounded-md border p-5 border-gray-400 flex-col mt-5 ">
						<h1 className="text-primary text-2xl font-bold">{project.title}</h1>
						<hr />
						<img src={project.image} alt="project" className="pt-2 h-60 w-80" />
						<h1 className="text-black  pt-2">
							Description : {project.description}
						</h1>

						<h1 className="  pt-2"> Technologies: {project.technologies} </h1>

						{/* Link the project URL */}
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							<h1 className="pt-2 text-blue-500 underline">
								Link: {project.link}
							</h1>
						</a>

						<div className="flex justify-end gap-3 pt-4">
							<button
								className="text-white rounded-md bg-secondary px-5 py-2 "
								onClick={() => {
									onDelete(project);
								}}>
								Delete
							</button>

							<button
								className="text-white rounded-md bg-primary px-5 py-2"
								onClick={() => {
									setSelectedItemForEdit(project);
									setShowAddEditModel(true);
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
				title={selectedItemForEdit ? "Edit project" : "Add project"}
				onCancel={() => setShowAddEditModel(false)}>
				<Form
					form={form} // Bind the form instance to the form
					layout="vertical"
					onFinish={onFinish}
					// initialValues={selectedItemForEdit}
				>
					<Form.Item name="title" label="Title">
						<input placeholder="Title" />
					</Form.Item>

					<Form.Item name="image" label="Image URL">
						<input placeholder="ImageURL" />
					</Form.Item>

					<Form.Item name="description" label="Description">
						<input placeholder="Description" />
					</Form.Item>

					<Form.Item name="technologies" label="Technologies">
						<textarea placeholder="Technologies Used" />
					</Form.Item>

					<a>
						<Form.Item name="link" label="Link">
							<input placeholder="Link of Project" />
						</Form.Item>
					</a>

					<div className="flex justify-end gap-3 ">
						<button
							className="border-primary border rounded-md text-primary py-2 px-5 "
							onCancel={() => {
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

export default AdminProjects;
