import axios from 'axios';

const searchImages = async (term, page) => {
    const response = await axios.get('https://api.unsplash.com/search/photos?page=' + page, {
        headers: {
            Authorization: 'Client-ID WY6joMxKhvEUzKOXc0v29AsYfA9Ya-CsG5R0xQ1JdBg'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;