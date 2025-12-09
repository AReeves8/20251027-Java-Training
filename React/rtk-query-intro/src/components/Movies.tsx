import type { Movie } from "../types/Movies";

interface MoviesProps {
    movie : Movie
}

const Movies = ({movie} : MoviesProps) => {

    return (
        <>
            <h2>{movie.title}</h2>
            <h3>{movie.rating}</h3>
            <h4>{movie.director?.firstName + ' ' + movie.director?.lastName}</h4>
            <hr />
        </>
    );
}

export default Movies;