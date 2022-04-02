const pushNotification = (header, message) => {
    let pushNotificationHeader = document.querySelector('.mr-auto');
    let pushNotificationMessage = document.querySelector('.toast-body');
    let pushNotification = document.querySelector('#liveToast');
    pushNotificationHeader.innerHTML = header;
    pushNotificationMessage.innerHTML = message;
    pushNotification.classList.remove('hide');
    pushNotification.classList.add('show');
    setTimeout(()=>{ 
        pushNotification.classList.remove('show');
        pushNotification.classList.add('hide');
    }, 2000)
};


export {pushNotification};