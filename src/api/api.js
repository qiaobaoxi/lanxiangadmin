import axios from 'axios';

let base = '';
let base1 = '/api';
export const requestLogin = params => { return axios.post(`${base1}/login`, params).then(res =>  res.data); };

export const getUserList = params => { return axios.get(`${base1}/user/list`, { params: params }); };

export const getUserById = params => { return axios.get(`${base1}/user/getUserById`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

//编辑用户
export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

//addUser

export const setUserJsc = params => { return axios.post(`${base1}/user/setUserJsc`, params).then(res =>  res.data); };

export const addUserOrUpdate = params => { return axios.post(`${base1}/user/addUserOrUpdate`, params).then(res =>  res.data); };

export const addJsc = params => { return axios.post(`${base1}/jurisdiction/addJsc`, params).then(res =>  res.data); };

export const addVideo = params => { return axios.post(`${base1}/video/addVideo`, params).then(res =>  res.data); };

export const videoList = params => { return axios.get(`${base1}/video/list`, { params: params }); };

export const  jurisdictionList= params => { return axios.get(`${base1}/jurisdiction/list`, { params: params }); };