import {validation} from './modules/validation';
import { pushNotification } from './modules/pushNotification';
import './styles/style.css';
const URL = 'https://lychee-tart-37379.herokuapp.com/api/auth/register';
const form = document.querySelector('.registerForm');
let header, message;
let data = {};
let dataFormInput = form.querySelector('[data-registration]');
form.addEventListener('input',(event) => {
    let resultValidation = validation(event.target);
    if(resultValidation){
        data[event.target.name] = event.target.value;    
    }else{
        delete(data[event.target.name]);
    }
    if(Object.keys(data).length !== 5){
        dataFormInput.setAttribute('disabled','');
    }else{
        dataFormInput.removeAttribute('disabled');
    }
})

form.addEventListener('submit',(event) => {
    event.preventDefault();
    if(event.target.dataset){
        fetch(URL,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return response.json()
        })
        .then(data => {
            if(data.message === 'User find'){
                header = 'Такой Email уже зарегестрирован';
                message = 'Такой Email уже зарегестрирован';
                pushNotification(header, message);
            }else if(data.message === 'User create'){
                header = 'Успешно сохранено';
                message = 'Успешно сохранено';
                pushNotification(header, message);
            }
        })
        .catch(error => console.log(error))    
    }
})
