// utils/url.js

const baseURL =
	process.env.NODE_ENV === "production"
		? "https://portfolio-site-jy89.onrender.com"
		: "http://localhost:10000";

export default baseURL;
