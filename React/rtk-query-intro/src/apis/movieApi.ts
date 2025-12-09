import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie } from "../types/Movies";

/**
 * createApi
 *      provide all the functionality you need to make server calls
 *      automatically put returned data into your store
 *      
 *      a combo of createSlice and createAsyncThunk (used with async reducers)
 * 
 *      three properties:
 *          reducerPath: basically a name
 *          baseQuery: the default URL for your server (specifically for these api requests)
 *          endpoints: a function, that takes in a builder object where each property is a different HTTP request
 *              builder has two types: queries and mutations
 *                  query - used for GET
 *                  mutation - any request thjat changes data (POST, PUT, DELETE, etc.)
 */
export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/movies'}),
    endpoints: (builder) => ({

        /**
         * query and mutation will need two types:
         *      1. the type of the returned data
         *      2. the type of any data you're passing into the function
         */
        findAllMovies: builder.query<Movie[], void>({
            query: () => ''                    // will send a GET request to http://localhost:8080/movies
        }),
        findMovieById: builder.query<Movie, number>({
            query: (id) => `/id/${id}`          // will send a GET request to http://localhost:8080/movies/id/{id}
        }),
        createMovie: builder.mutation<Movie, Movie>({
            query: (newMovie) => {
                return {
                    url: '',
                    method: 'POST',
                    body: newMovie
                }
            }
        }),
        updateMovie: builder.mutation<Movie, Movie>({
            query: (updatedMovie) => {
                return {
                    url: '',
                    method: 'PUT',
                    body: updatedMovie
                }
            }
        }),
        deleteMovie: builder.mutation<Movie, number>({
            query: (movieId) => {
                return {
                    url: `/id/${movieId}` ,
                    method: 'DELETE'
                }
            }
        })

    })
});