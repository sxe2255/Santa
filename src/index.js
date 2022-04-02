import { renderPersonalCabinet, openModalUpdate } from './modules/renderProfile';
import { isAuthorisation } from './modules/login';
import { createChart } from './modules/chart';
import './styles/style.css';

isAuthorisation();
renderPersonalCabinet()
.then(data =>{
    createChart(data);
});


if (document.querySelector('#updatePersonalData')) {
    document.querySelector('#updatePersonalData').addEventListener('click', openModalUpdate);
}