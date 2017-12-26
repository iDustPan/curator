
import axios from 'axios';

const ROOT_URL = 'https://5thave-prod.bybieyang.com'

class Fetcher {

	get(path, param) {
		const url = `${ROOT_URL}/${path}`
		if (param instanceof Object && typeof param !== 'string') {
			return axios.get(url, param);
		}else if (typeof param === 'string' && param.length > 0) {
			return axios.get(`${url}?${param}`);
		}else{
			return axios.get(`${url}`);
		}
	}
}

const fetcher = new Fetcher();

export default fetcher;
