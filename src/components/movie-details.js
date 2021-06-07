import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function MovieDetails(props) {

    const mov = props.movie;


    return (
        <div>
            {mov ? (

                <div>


                    <h1>{mov && props.movie.title}</h1>
                    <p>{mov && props.movie.description}</p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'coral' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'coral' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'coral' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'coral' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'coral' : ''}/>
                    ({props.movie.no_of_ratings})


                </div>


            ) : null}

        </div>
    )
}


export default MovieDetails;

