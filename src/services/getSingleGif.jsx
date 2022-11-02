import { API_URL, API_KEY } from './settings';

const fromApiResponseToGif = apiResponse => {
    const { data } = apiResponse
    const { images, title, id } = data
    const { url } = images.downsized_medium
    return { title, id, url }
}

function getSingleGif ({ id }) {
    return fetch(`${API_URL}/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGif)
}

export default getSingleGif