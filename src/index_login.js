import { writeAccountData } from './modules/login';

import './styles/style.css';

let form = document.querySelector('#login');
form.addEventListener('input', (event)=>{
    if(event.target.classList.contains('formLoginInvalid')){
        event.target.classList.toggle('formLoginInvalid');
    }
});
form.addEventListener('submit', writeAccountData);