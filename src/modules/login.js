import { getLogin } from './utils';
import { pushNotification } from './pushNotification';

const isAuthorisation = () => {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }
}

const writeAccountData = async (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#userEmail');
    const userPass = document.querySelector('#userPassword');
    let header, message;
    if(userEmail.value.trim() === ''){
        userEmail.classList.toggle('formLoginInvalid');
    }
    if(userPass.value.trim() === ''){
        userPass.classList.toggle('formLoginInvalid');
    }
    else{
        let data = {
            email: userEmail.value.trim(),
            password: userPass.value.trim()
        };
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        let loginRes = await getLogin(options);
        if(loginRes.token){
            localStorage.setItem('token', loginRes.token);
            window.location.href = "./index.html";
        }
        else if(loginRes.message){
            if(loginRes.message === 'email not found'){
                if(!userEmail.classList.contains('formLoginInvalid')){
                    userEmail.classList.toggle('formLoginInvalid');    
                }
                header = 'Не успешно';
                message = 'Email не найден';
                pushNotification(header, message);
            }else if(loginRes.message === 'password invalid'){
                if(!userPass.classList.contains('formLoginInvalid')){
                    userPass.classList.toggle('formLoginInvalid');    
                }
                header = 'Не успешно';
                message = 'Не правильный пароль';
                pushNotification(header, message);
            }
        }
    }       
}

export { isAuthorisation, writeAccountData}