import React from 'react';
import axios from 'axios';
import { authHeader }from '../helpers/index'

const apiHost = 'http://localhost:3001';

export const followService = {
    getFollows,
    createFollow,
    removeFollow
}

function getFollows(){
    return axios.get('http://localhost:3001/follow',
    { headers: authHeader() })
    .then(response =>{ 
        return response.data;
    })
}

function createFollow(user_id){
   
    return axios.post('http://localhost:3001/follow',
    { follow_user_id: user_id },
    { headers: authHeader() })
    .then(response =>{ 
        return response.data;
    })
}

function　removeFollow(id){
    return axios.delete('http://localhost:3001/follow/' + id,
    {headers: authHeader()})
    .then(response =>{ 
        return response.data;
    })
}


function handleResponse(response){
    //console.log(JSON.stringify(response));
    //console.log(JSON.stringify(response));
    //alert(response.status);  
}
