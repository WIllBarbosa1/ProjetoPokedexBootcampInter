/* eslint-disable linebreak-style */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React, { useEffect, useState } from 'react';
import Text from '../../components/Text';
import api from '../../services/api';

function Dashboard() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getItems() {
            const { data: { results } } = await api.get('/pokemon');

            const resp = await Promise.all(results.map(({ url }) => api.get(url)));

            console.log(resp);

            const format = resp.map((req) => req.data);

            setPokemon(format);
        }

        getItems();
    }, []);

    return (
        <div>
            <Text as="h1">Pokédex</Text>
            <Text as="p">Search for Pokémon by name or using the National Pokédex number</Text>

            {pokemon.length > 0 && pokemon.map(({ name, id, sprites }) => (
                <div key={id}>
                    {name}

                    <img src={sprites.front_default} alt="pokémon img" />
                </div>
            ))}

        </div>
    );
}

export default Dashboard;
