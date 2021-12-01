import axios from 'axios';
/**
 * Configurar o axios para a api: https://jsonplaceholder.typicode.com/
 */
 export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});