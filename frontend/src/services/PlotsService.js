import axios from 'axios';

import plots from './plots';

const API_BASE_URL = "/user";

let headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
}
const updatePlotStatus = (plotInfo = {}) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.put(`/plots`, plotInfo, {headers});
}

const getPlotsInfo = () => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.get(`/plots`,{headers});   
}


export default { getPlotsInfo, updatePlotStatus };