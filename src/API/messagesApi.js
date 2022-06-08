import axios from 'axios';

const fetchMessagesAPI = () => axios.get('http://localhost:3000/api/messages').then((response) => response.data.message);

export default fetchMessagesAPI;
