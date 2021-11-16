/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import './MovieRow.css';


export default ({title, items}) => {

    return(
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listArea">
                {items.results  != 0 && items.results.map((item, key) => (
                    <img src={`htpps://image.tmdb.org/t/p/w300${items.poster_path}`} />
                ))}
            </div>
        </div>

    ) 
}