import { async } from 'regenerator-runtime';
import {getHistory} from './utils';

const renderHistory = async () => {
    let resHistory = await getHistory();
    let historyLastFive = document.querySelector('.historyLastFive');
    if(resHistory.length !== 0){
        historyLastFive.innerHTML = '';
        resHistory.forEach(element => {
            let date = element.date.substring(0,10);
            historyLastFive.innerHTML += `<a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
            <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                <p class="mb-0 opacity-75" id="">${element.userWhoGetGift_firstName}</p>
                <p class="mb-0 opacity-75" id="">${element.userWhoGetGift_lastName}</p>
                </div>
                <small class="opacity-50 text-nowrap">${date}</small>
            </div>
          </a>`;
        });
    }
    else {
        historyLastFive.innerHTML += `<div class="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div>
            <p class="mb-0 opacity-75" id="">Пока нет</p>
            </div>
        </div>`;
    }
}

export {renderHistory}