export function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'))
    let client = JSON.parse(localStorage.getItem('client'))
    let uid = JSON.parse(localStorage.getItem('uid'))
    if(token)  {
        return  { 'access-token':  token,
        'client': client,
        'uid': uid};
    }else{
        return {};
    }
}

