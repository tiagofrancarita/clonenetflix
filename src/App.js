/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            //Pegando a lista total.
            let listaCompleta = await Tmdb.geHomeList();
            setMovieList(listaCompleta);
        }

        loadAll();

    }, [])

    return (
        <div className="page">
           <section className="lists">
                {movieList.map((item, key) =>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
           </section>
        </div>
    );
}