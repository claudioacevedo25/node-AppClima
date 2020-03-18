


const axios = require('axios');



const getLugarLatLng = async (dir) => {

        const encodeURL = encodeURI(dir)
        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
            headers: {'x-rapidapi-key': 'a742fcd8e3msh24e872524e9390cp1a5e4cjsn11502959ba99'}
        });

        const resp = await instance.get();

        if( resp.data.Results.length === 0){
            throw new Error (`No hay resultados para la ${dir}`);
        }

        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lon = data.lon;

                return {
                    direccion,
                    lat,
                    lon
                }
}

module.exports = {
    getLugarLatLng
}
