import { API_URL, API_KEY } from './settings';

const getGifs = ( keyword ) => {
    const apiURL = `${API_URL}/search?api_key=${API_KEY}=${keyword}&limit=10&offset=0&rating=G&lang=en`
    return (fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_still
            return { title, id, url }
        })
        return gifs
    }));
};

export { getGifs };