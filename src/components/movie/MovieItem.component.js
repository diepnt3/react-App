import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const MovieItem = (props) => {
    const {movie: {image, title, id}} = props;
    return (
            <div className="movie-item">
                <div  className="movie-item__box-image">
                    <div className="movie-item__thum-image">
                        <div className="movie-item__global-figure">
                            <Link to ={`/detail/${id}`}>
                                <span className="movie-item__image"  style={{backgroundImage: `url(${image})`}}></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="movie-item__title">
                    <h4>
                        <Link to ={`/detail/${id}`}>
                            {title}
                        </Link>
                    </h4>
                    
                </div>
            </div>
        );
}

export default MovieItem;