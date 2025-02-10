const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const PORT = 4000;

app.use(cors());

app.get('/pokemon/:pokemonName', async (req, res) => {
    const pokemonName = req.params.pokemonName;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await axios.get(url);
        const {name, sprites: {front_default}, height, weight} = response.data;

        res.json({name, front_default, height, weight});

    } catch (error) {
        res.status(404).json({error: 'No se encontró el pokemon'});  // 404 Not Found - El recurso solicitado no se pudo encontrar.
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});