import { async } from 'regenerator-runtime';
import { getResource } from './utils';
import{ renderPersonalCabinet } from './renderProfile';
const URL_SENDGIFT = 'http://localhost:5000/api/history/addhistory';

const sendGift = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }};
    const data = await getResource(URL_SENDGIFT, options)
            .then(data =>{
                return data
            })
            .catch(error => {
                console.log(error)
            })
    return data
}

export { sendGift };