import { API_URL, API_KEY } from './settings';

const getGifs = ( { keyword = 'random', limit = 10, page = 0} = {} ) => {
    // El offset es cuantos resultados me tengo que saltar cada vez que te vaya a entregar resultados
    const apiURL = `${API_URL}/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${limit * page}&rating=G&lang=en`
    return (fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        console.log(response);
        const gifs = data.map(image => {
            const { images, title, id } = image
            // const { url } = images.downsized_still
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }));
};

export { getGifs };