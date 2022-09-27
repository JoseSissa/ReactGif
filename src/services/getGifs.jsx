const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q';

const getGifs = ({ keyword = 'house of dragon' } = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=30&offset=0&rating=G&lang=en`
    return (fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }));
};

export { getGifs };