const USER_DATA = 'https://lychee-tart-37379.herokuapp.com/api/personal/personal';
const USER_LOGIN = 'https://lychee-tart-37379.herokuapp.com/api/auth/login';
const USER_HISTORY = 'https://lychee-tart-37379.herokuapp.com/api/history/history';

import regeneratorRuntime from 'regenerator-runtime';
const getResource = async(url, options) => {
    try {
        const res = await fetch(url, options);
        if(res.status === 401 && res.statusText === 'Unauthorized'){
            alert('Произошла ошибка перелогиньтесь');
            window.location.href = './login.html';
        }
        return res.json();
    } catch (e) {
        console.log(e);
    }
};

const getLogin = async(options) => {
    try {
    const res = await getResource(USER_LOGIN, options);
    return res;
    } catch (e) {
        console.log(e);
    }
}

const getUser = async () => {
    let options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }};        
    const res = await getResource(USER_DATA,options);
    return res;
}
const getHistory = async () => {
    let options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }};        
    const res = await getResource(USER_HISTORY,options);
    return res;
}



export {  getLogin, getUser, getResource,getHistory };