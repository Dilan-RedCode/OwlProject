import axios from 'axios';
axios.defaults.withCredentials = true;


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001', // Asegúrate de que esta sea la URL de tu backend
    withCredentials: true, // ¡Crucial para enviar y recibir cookies!
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    
    
});



export default axiosInstance;