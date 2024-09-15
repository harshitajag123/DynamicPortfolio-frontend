import { message } from "antd";
import React from "react";
import { useState } from "react";
import { showLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import baseURL from "../../utils/url";

function Login() {
	const dispatch = useDispatch();
	const [user, setUser] = useState({ username: "", password: "" });
	const login = async () => {
		try {
			dispatch(showLoading()); //before sending request
			const response = await axios.post(`${baseURL}/api/portfolio/admin-login`, user);
			dispatch(HideLoading()); //after loading data
			console.log(response.data);
			if (response.data.success) {
				message.success(response.data.message);
				localStorage.setItem("token",JSON.stringify( response.data));
				window.location.href = "/admin";
			} else {
				message.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			message.error(error.message);
			dispatch(HideLoading());
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-primary">
			<div className="w-96 flex flex-col gap-5 p-5  shadow border border-gray-500  bg-normal rounded-md">
				<h1 className="text-xl text-primary font-semibold">
					Harshita Jagtap - Admin Login
				</h1>
				<input
					type="text"
					placeholder="Username"
					onChange={(e) => setUser({ ...user, username: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>

				<button
					className="p-3 bg-primary text-white rounded-md"
					onClick={login}>
					Login
				</button>
			</div>
		</div>
	);
}

export default Login;
