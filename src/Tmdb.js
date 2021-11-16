/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'b8003898faa7f9880d1bbb13affcebe7';
const API_BASE = 'https://api.themoviedb.org/3';

/*

 - Priginais da netflix ();
 - Recomendados (trending);
 - Em alta (top rated);
 - ação
 - comedia
 - terror
 - romance
 - documentarios

*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {

    geHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'toprated',
                title: 'Em alta',
                items: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
            },

            {
                slug: 'action',
                title: 'Ação',
                items: `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
            },

            {
                slug: 'romance',
                title: 'Romance',
                items: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
            },

            {
                slug: 'documentary',
                title: 'Documentário',
                items: `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
            }

        ];
    }    
}
