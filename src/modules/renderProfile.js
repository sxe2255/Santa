import { async } from 'regenerator-runtime';
import { getUser, getResource } from './utils';
import { modalWindowUpdate } from './modal';
import { pushNotification } from './pushNotification';
import { sendGift } from './sendGift';
import { renderHistory } from './renderHistory';


const URL_SANTA = 'http://localhost:5000/api/personal/santa';

let userData;
let preloader = document.querySelector('.preloader-5');
const renderPersonalCabinet = async () => {
    const dataWhoGets = document.querySelector('#whoSendGift');
    userData = await getUser();

    let personalData = document.querySelectorAll('[data-info]');
    let personalDataWhoGets = document.querySelectorAll('[data-infoWhoGift]');
    const buttonGetUserPost = document.querySelector('#getUserPost');
    const buttonGiftSent = document.querySelector('#giftSent');
    const countUser= document.querySelector('#countUser');
    countUser.innerHTML = userData.allUser;
    let header, message; 
    personalData.forEach(element => {
        let infoPersonal = element.dataset.info;
        if(element.tagName === 'INPUT'){
            element.value = userData[infoPersonal];
        }else{
            element.innerHTML = userData[infoPersonal];
        }
    });
    if(userData.dataWhoGets){
        buttonGetUserPost.style.display = 'none';
        buttonGiftSent.style.display = 'block';
        preloader.style.display = 'none';
        personalDataWhoGets.forEach(element => {
            element.innerHTML = userData.dataWhoGets[element.dataset.infowhogift];
        });
        dataWhoGets.style.display = 'block';
        buttonGiftSent.addEventListener('click', async () => {
            let resultSendGift = await sendGift();
            if(resultSendGift.message === 'send gift'){
                whoSendGiftNone.style.display = 'block';
                dataWhoGets.style.display = 'none';
                renderPersonalCabinet();
                header = 'Успешно';
                message = 'отправлено';
                pushNotification(header,message);
            }
        })
    }else{
        buttonGiftSent.style.display = 'none';
        buttonGetUserPost.style.display = 'block';
        buttonGetUserPost.addEventListener('click', async () => {
            const whoSendGiftNone = document.querySelector('.whoSendGiftNone');
            whoSendGiftNone.style.display = 'none';
            preloader.style.display = 'block';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            };
            await getResource(URL_SANTA, options)
            .then(data =>{
                if(data.message === 'User Without Who Gets not found'){
                    header = 'Ошибка';
                    message = 'Простите, но пока не хаватает людей';
                    pushNotification(header,message);
                }else if(data.message === 'You have userSend'){
                    header = 'Ошибка';
                    message = 'Увас уже есть, отправьте подарок';
                    pushNotification(header,message);
                }else{
                    renderPersonalCabinet();
                    header = 'Успешно';
                    message = 'Письмо отправлено';
                    pushNotification(header,message);
                }
            })
            .catch(error => {
                console.log(error)
            })
        })
    }
    renderHistory();
    return userData
}

const openModalUpdate = () => {
    modalWindowUpdate();
}
export { renderPersonalCabinet, openModalUpdate };