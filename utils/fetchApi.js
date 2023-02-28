import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const {data} = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key": "3c1508df20msh0a89a3e100b0b0bp1922dajsnd61f9f9f04c9",
		},
	});

	return data;
};
