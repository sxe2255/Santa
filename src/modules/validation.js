import { pushNotification } from './pushNotification';
const regularEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const validation = (element) => {
    let header,message;
    if(element.name === 'firstName' || element.dataset.info === 'firstName'){
        if(element.value.trim().length <=3 || element.value.trim() == ''){
            header = 'Ошибка в имени';
            message = 'Имя должно быть не пустое и больше 3 букв';
            pushNotification(header, message);
            return false
        }
    }
    if(element.name === 'email' || element.dataset.info === 'email'){
        if(!element.value.trim().match(regularEmail)){
            header = 'Ошибка в имени';
            message = 'Поправьте Email';
            pushNotification(header, message);
            return false
        }
    }
    if(element.name === 'lastName' || element.dataset.info === 'lastName'){
        if(element.value.trim().length <=3 || element.value.trim() == ''){
            header = 'Ошибка в фамилии';
            message = 'Фамилия должно быть не пустое и не меньше 3 символов';
            pushNotification(header, message);
            return false
        }
    }
    if(element.name === 'address' || element.dataset.info === 'address'){
        if(element.value.trim().length <=3 || element.value.trim() == ''){
            header = 'Ошибка в адресе';
            message = 'Адрес должно быть не пустое и не меньше 3 символов';
            pushNotification(header, message);
            return false
        }
    }
    if(element.name === 'password'){
        if(element.value.trim().length <=5 || element.value.trim() == ''){
            header = 'Ошибка в пароле';
            message = 'Пароль должно быть не пустой и не меньше 5 букв';
            pushNotification(header, message);
            return false
        }
    }

    return true
}

export {validation}