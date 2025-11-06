package com.skillstorm.spring_data_jpa_demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.spring_data_jpa_demo.models.Movie;
import com.skillstorm.spring_data_jpa_demo.services.MovieService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }


    @GetMapping
    public ResponseEntity<List<Movie>> findAllMovies() {

        try {
            List<Movie> movies = movieService.findAllMovies();
            return new ResponseEntity<>(movies, HttpStatus.OK);     // return the movies and 200 if everything went ok
        } catch (Exception e) {

            // return a 500 if any sort of exception occured
            return  ResponseEntity.internalServerError().header("message", "Ooops. Something went wrong.").build();   
        }
        
    }
    
    
    // request URI /movies/id/4
    @GetMapping("/id/{id}")
    public ResponseEntity<Movie> findMovieById(@PathVariable int id) {
        try {
            return new ResponseEntity<>(movieService.findById(id), HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            // the id proivided is invalid
            return  ResponseEntity.badRequest().header("message", e.getMessage()).build();  // sending 400 for bad ID

        }catch (Exception e) {
            // return a 500 if any sort of exception occured
            return  ResponseEntity.internalServerError().header("message", "Ooops. Something went wrong.").build(); 
        }
    }

     @GetMapping("/rating/{rating}")
    public ResponseEntity<List<Movie>> findMovieByRating(@PathVariable int rating) {
        try {
            return new ResponseEntity<>(movieService.findByMinimumRating(rating), HttpStatus.OK);
        } catch (Exception e) {
            // return a 500 if any sort of exception occured
            return  ResponseEntity.internalServerError().header("message", "Ooops. Something went wrong.").build(); 
        }
    }
    
    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        
        try {
            return new ResponseEntity<>(movieService.createMovie(movie), HttpStatus.CREATED);     // return the movies and 201 if everything went ok
        } catch (Exception e) {

            // return a 500 if any sort of exception occured
            return  ResponseEntity.internalServerError().header("message", "Ooops. Something went wrong.").build();   
        }
        
    }
    
    @PutMapping("/title/{id}")
    public ResponseEntity<Void> updateMovieTitle(@PathVariable int id, @RequestParam("new_title") String newTitle) {
        
        try {
            movieService.updateTitle(id, newTitle);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);     // return 204 if everything went ok
        } catch (Exception e) {

            // return a 500 if any sort of exception occured
            return  ResponseEntity.internalServerError().header("message", e.getMessage()).build();   
        }
    }
    
}
