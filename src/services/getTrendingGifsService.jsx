import { API_URL, API_KEY } from './settings';

const getTrendingGifsService = () => {
    const apiURL = `${API_URL}/trending?api_key=${API_KEY}`;

    let trends = [];
    const repeatElement = elem => trends.some(trend => trend.name === elem.username);    

    return (fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data = []} = response;
        // Ahora extraemos sólo el username de los trendings sin repetir
        for (const elem of data) {
            if(elem.username != '' && !repeatElement(elem)) {
                trends.push({
                    id: elem.id,
                    name: elem.username
                });
            }
        }
        return trends;
        })
    )
};

export { getTrendingGifsService };