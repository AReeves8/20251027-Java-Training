package com.skillstorm.spring_data_jpa_demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.skillstorm.spring_data_jpa_demo.models.Movie;
import com.skillstorm.spring_data_jpa_demo.repositories.MovieRepository;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    // construstor injection for our beans
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }

    public Movie findById(int id) throws IllegalArgumentException {
        Optional<Movie> movie = movieRepository.findById(id);
        if(movie.isPresent()) {
            return movie.get();     // returns the object from the optional
        }
        else {
            throw new IllegalArgumentException("No movie with that ID.");
        }
    }

    public List<Movie> findByMinimumRating(int rating) {

        return movieRepository.findAllByRatingGreaterThanEqual(rating);
    }


    public Movie createMovie(Movie movie) {

        /**
         * save()
         *      - creates new records
         *      - updates existing records
         *  
         *      - runs isNew() to check if the provided entity already exists
         */

        return movieRepository.save(movie);

    }

    public void updateTitle(int id, String newTitle) throws NoSuchElementException {

        int returnedId = movieRepository.updateMovieTitle(id, newTitle);

        // checking for 0 because that's java default for primitive int. only works because 0 isn't a valid ID in MY db. 
        if(returnedId == 0) {
            throw new NoSuchElementException();
        }   
         
    }
}
