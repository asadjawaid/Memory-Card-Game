import axios from 'axios';

export const apiCall = () => {
	return axios.get('https://akabab.github.io/starwars-api/api/all.json');
};
