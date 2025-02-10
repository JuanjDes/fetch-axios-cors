function getPokemonInfo() {
    const pokemonNameInput = document.getElementById('pokemonName');
    const pokemonInfo = document.getElementById('pokemonInfo');

    const pokemonName = pokemonNameInput.value.toLowerCase();
    
    // Hacemos la petición a nuestro localhost: donde tenemos app.js y recogemos datos de la API de Pokemon
    
    fetch(`http://localhost:4000/pokemon/${pokemonName}`)
            // Si la petición es exitosa
            .then(response => response.json())
            .then(data => {
                const {name, front_default, height, weight} = data
                console.log(data);
                pokemonInfo.innerHTML = `
                    <center>
                        <h2>${name}</h2>
                        <img src="${front_default}" alt="${name}">
                        <p>Altura: ${height} cm</p>
                        <p>Peso: ${weight} kg</p>
                    </center>
                `;
            })
            .catch(error => {
                pokemonInfo.innerHTML = `
                    <center>
                        <h2>Error</h2>
                        <p>No se ha encontrado el pokemon</p>
                    </center>
                `;
            });

};