/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export default api;
