import { async } from 'regenerator-runtime';
import { getResource } from './utils';

const URL_SENDGIFT = 'https://lychee-tart-37379.herokuapp.com/api/history/addhistory';

const sendGift = async () => {
    const options = {
        method: 'POST',
        mode: 'no-cors',
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