import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Loader from "./components/Loader";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	setPortfolioData,
	showLoading,
	HideLoading,
	ReloadData,
} from "./redux/rootSlice";
import { useSelector } from "react-redux";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
import baseURL from "./utils/url";

function App() {
	const { loading, portfolioData, reloadData } = useSelector(
		(state) => state.root
	);
	const dispatch = useDispatch();
	const getPortfolioData = async () => {
		dispatch(showLoading()); // Show loader when starting fetch
		try {
			const response = await axios.get(
				`${baseURL}/api/portfolio/get-portfolio-data`
			);
			// console.log(response.data);
			dispatch(setPortfolioData(response.data));
			dispatch(ReloadData(false));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(HideLoading()); // Hide loader after fetching
		}
	};
	useEffect(() => {
		getPortfolioData();
	}, []);

	useEffect(() => {
		console.log(portfolioData);
	}, [portfolioData]);

	useEffect(() => {
		if (reloadData) {
			getPortfolioData();
		}
	}, [reloadData]);

	return (
		<>
			<BrowserRouter>
				{loading ? <Loader /> : null}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/admin-login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

// "proxy": "http://localhost:3000/"
