import React from 'react';
import axios from 'axios';
import { authHeader }from '../helpers/index'

const apiHost = 'http://localhost:3001';

export const userService = {
    login,
    logout,
    signup,
    edit,
    changePassword,
    getMe,
    getUserInfo,
    Search,
    follow,
    removeFollow,
    getFollowUser,
    getFollower,
}

function login(email,password){


    return axios.post('http://localhost:3001/auth/sign_in',{
        email: email,
        password: password
    })
    .then((response) => {
        if(response.headers["access-token"]){
            
            localStorage.setItem('token', JSON.stringify(response.headers["access-token"]));
            localStorage.setItem('client', JSON.stringify(response.headers["client"]));
            localStorage.setItem('uid', JSON.stringify(response.headers["uid"]));
        }
        return response.headers;
    })

             
}

function logout(){
    console.log("service_logout")
    localStorage.removeItem('token')
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
}

function signup(account_id , name, email, password, password_confirmation){

    return axios.post('http://localhost:3001/auth', {
        name: account_id,
        nickname: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation})
        .then(response =>{
            return response;
        })
}

function edit( name,nickname, email, password, password_confirmation){
    
    return axios.put('http://localhost:3001/auth',
        {name: name,
        nickname: nickname,
        email: email},
        {headers: authHeader()}
        )
        .then(response => {
            return response;
        })
}

function changePassword( password, password_confirmation){
    
    return axios.put('http://localhost:3001/auth/password ',
        {password: password,
        password_confirmation: password_confirmation},
        {headers: authHeader()}
        )
        .then(response => {
            return response;
        })
}

function getMe(){
    return axios.get('http://localhost:3001/users/me', {headers: authHeader()})
    .then(response => {
        //console.log(response.data);
        //alert(response.data.user.name)
        return response.data;
    })
}

function getUserInfo(id){
    return axios.get('http://localhost:3001/users/' + id, {headers: authHeader()})
    .then(response => {
        return response.data;
    })
}

function Search(search, page){
    return axios.get('http://localhost:3001/users/search/' + search + `?page=${page}`,
    { headers: authHeader() })
    .then(response =>{ 
        return response.data;
    })
}

function follow(user_id){
    return axios.post(`http://localhost:3001/follow`,
    { headers: authHeader() },
    { follow_user_id: user_id })
    .then(response =>{ 
        return response.data;
    })
}

function　removeFollow(user_id){
    return axios.delete(`http://localhost:3001/follow`,
    { headers: authHeader() },
    { follow_user_id: user_id })
    .then(response =>{ 
        return response.data;
    })
}

function getFollowUser(user_id, page){
    return axios.get('http://localhost:3001/users/' + user_id + `/follows?=${page}`,
    { headers: authHeader() })
    .then(response =>{ 
        return response.data;
    })
}

function getFollower(user_id, page){
    return axios.get('http://localhost:3001/users/' + user_id + `/followers?=${page}`,
    { headers: authHeader() })
    .then(response =>{ 
        return response.data;
    })
}

function handleResponse(response){
    //console.log(JSON.stringify(response));
    //console.log(JSON.stringify(response));
    //alert(response.status);  
}
