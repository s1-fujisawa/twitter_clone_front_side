import axios from 'axios';
import { authHeader }from '../helpers/index'

export const tweetService = {
    create_post,
    get_posts,
    get_post,
    get_user_posts,
    removePost,
}

function create_post(post){
    return axios.post('http://localhost:3001/tweets',
    {post: post},
    {headers: authHeader()})
    .then(response =>{
        return response;
    })
}

function get_posts(page){
    return axios.get(`http://localhost:3001/tweets?page=${page}`,
    {headers: authHeader()})
    .then(response =>{
        console.log(response);
        return response;
    })
}

function get_post(id){
    return axios.get(`http://localhost:3001/tweets/` + id,
    {headers: authHeader()})
    .then(response =>{
        console.log(response);
        return response;
    })
}

function get_user_posts(user_id,page){
    return axios.get('http://localhost:3001/users/tweets/' + user_id + `?page=${page}`,
    {headers: authHeader()})
    .then(response =>{
        console.log(response);
        return response;
    })
}

function removePost(id){
    return axios.delete('http://localhost:3001/tweets/' + id ,
    {headers: authHeader()})
    .then(response =>{ 
        return response.data;
    })

}