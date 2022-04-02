import { updateData } from './updateData';
const modalWindow = document.querySelector('#myModal');
const closeModal = modalWindow.querySelector('button[data-dismissClose="modal"');
const closeSave = modalWindow.querySelector('button[data-dismissSave="modal"');
const modalWindowUpdate = () => {
    modalWindow.classList.add('show');
    modalWindow.style.display = 'block';
    updateData();
    
    
    closeModal.addEventListener('click', ()=>{
        modalWindow.classList.remove('show');
        modalWindow.style.display = 'none';
        document.body.classList.remove('modal-open');
    })
}

export { modalWindowUpdate, closeSave, modalWindow};