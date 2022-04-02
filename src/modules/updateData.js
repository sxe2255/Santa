import { getResource} from './utils';
import { closeSave, modalWindow } from './modal';
import { pushNotification } from './pushNotification';
import { renderPersonalCabinet } from './renderProfile';
import {validation} from './validation';
import { async } from 'regenerator-runtime';

const UPDATE_URL = 'https://lychee-tart-37379.herokuapp.com/api/personal/personal';

const updateData = () => {
    let header = '';
    let message = '';
    let formUpdate = document.querySelector('.formUpdate');
    let dataPut = {};
    formUpdate.addEventListener('input', (event) => {
        closeSave.removeAttribute('disabled');
        let resultValidation = validation(event.target);
        if(resultValidation){
            dataPut[event.target.dataset.info] = event.target.value;    
        }else{
            delete(dataPut[event.target.dataset.info]);
        }
    });

    closeSave.addEventListener('click', async () => {
        if(!closeSave.getAttribute('disabled')){
            closeSave.setAttribute('disabled','');
        }
        let options = {
            method: 'PUT',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(dataPut)
        };
        if(Object.keys(dataPut).length === 0){
            header = 'Ошибка';
                message = `Данные не прошли проверку`;
                modalWindow.classList.remove('show');
                modalWindow.style.display = 'none';
                pushNotification(header, message);
        }else{
            getResource(UPDATE_URL, options)
            .then(() => {
                header = 'Успех';
                message = 'Успешно сохранено';
                modalWindow.classList.remove('show');
                modalWindow.style.display = 'none';
                pushNotification(header, message);
                renderPersonalCabinet();
            })
            .catch(error =>{
                header = 'Ошибка';
                message = `Не успешно. Ошибка: ${error}`;
                modalWindow.classList.remove('show');
                modalWindow.style.display = 'none';
                pushNotification(header, message);
            })
        }
    });
}

export { updateData };