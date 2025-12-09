
import { useRef } from 'react';
import { movieApi } from './apis/movieApi'
import './App.css'
import Movies from './components/Movies';
import type { Movie } from './types/Movies';

function App() {

  const titleRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);


  /**
   * createApi creates a bunch of custom hooks based on your endpoints
   *    use these hooks to do yur API calls
   * 
   *    queries return to properties: data and refetch
   *        data contains the HTTP response data
   *        refetch is a function to perform the query again at any point 
   * 
   *    lazy queries
   *        trigger can be used to make the API call
   *        result contains returned HTTP response data   
   */
  const {data: movies, refetch} = movieApi.useFindAllMoviesQuery();   // to immediately perform the api call on mount
  // const [trigger, result] = movieApi.useLazyFindAllMoviesQuery();     // to make the call at some other time of your choosing

  const [createMovie] = movieApi.useCreateMovieMutation();            // mutation function for making POST request for new movies

  const handleSubmit = (event) => {     // NEVER USE ANY. IT IS BAD. :(
    event.preventDefault();

    const newMovie : Movie = {
      title: String(titleRef.current?.value),
      rating: Number(ratingRef.current?.value),
      director : {
        firstName: String(firstNameRef.current?.value),
        lastName: String(lastNameRef.current?.value),
      }
    }

    // makes POST request to create movie
    createMovie(newMovie)
      .unwrap()
      .then((data) => {
        console.log('RETURNED MOVIE:')
        console.log(data);

        // re-fetch the data from backend
        refetch();

        /**
         * refetching data is usually bad practice
         * 
         * Redux will automatically cache data so it won't actually perform 
         * the request unless it thinks the cache is invalid 
         * 
         * so refetch can be used more often and it isn't as bad
         */

      })
      .catch(error => console.error(error))
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        Title: <input ref={titleRef} />
        Rating: <input ref={ratingRef} />
        Director First Name: <input ref={firstNameRef} />
        Director Last Name: <input ref={lastNameRef} />
        <button type='submit'>Create Movie</button>
      </form>

      {movies?.map((movieToDisplay) => {
        return (
          <Movies key={movieToDisplay.id} movie={movieToDisplay} />
        )
      })}

    </>
  )
}

export default App
