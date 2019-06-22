import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "03978b23e89a13a44a461e0d490b0a6c",
        language: 'ko-KR'
    }
})

export const movieApi = {
    getMovie: (id) => api.get(`movie/${id}`, {
        params: { append_to_response: 'videos' }
    }),
    getNowPlaying: () => api.get('movie/now_playing'),
    getUpcoming: () => api.get('movie/upcoming'),
    getPopular: () => api.get('movie/popular'),
    searchMovies: (term) => api.get('search/movie', {
        params: { query: encodeURIComponent(term) }
    })
};

export const tvApi = {
    getShow: (id) => api.get(`tv/${id}`, {
        params: { append_to_response: 'videos' }
    }),
    getTopRated: () => api.get('tv/top_rated'),
    getPopular: () => api.get('tv/popular'),
    getAiringToday: () => api.get('tv/airing_today'),
    searchTv: (id) => api.get(`tv/${id}`, {
        params: { append_to_response: 'videos' }
    })
}