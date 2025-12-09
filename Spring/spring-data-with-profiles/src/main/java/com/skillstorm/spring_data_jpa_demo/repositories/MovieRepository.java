package com.skillstorm.spring_data_jpa_demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstorm.spring_data_jpa_demo.models.Movie;

import jakarta.transaction.Transactional;


/**
 * REPOSITORIES
 *      talk to your database (executes queries)
 *      no business logic
 *          only method declarations, no method bodies since its an interface
 *      
 *      JpaRepository needs two data types: one for the model and anopther for the PK of that model
 * 
 *          CrudRepository                  - crud operations
 *          PagingAndSortingRepository      - CRUD + paging and sorting
 *          JpaRepository                   - CRUD + PAGE & SORT + lots of extras
 */
@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {



    /**
     * finds all fields for movies with a rating greater than or equal to what was passed in. 
     * 
     * spring jpa uses keywords in method names to build JPQL queries
     * https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html
     * 
     */
    public List<Movie> findAllByRatingGreaterThanEqual(int rating);

    /**
     * @Query lets you write your own JPQL queries as a string
     *      - not advised. harder to maintain. more prone to SQL injection. more prone to errors. 
     * 
     * @Modifying needed for insert, update, delete
     * 
     * @Transactional if an error happens, the method will rollback any changes that were made before the error
     *      - ex: if updating 10 records, but the 7th record fails. what happens to the that were already changed?
     *          - rollback and undo changes to those other 6
     *          - w/o transactional, the 6 would stay modified in the db
     */
    @Query("update Movie m set m.title = :movieTitle where id = :movieId")
    @Modifying
    @Transactional
    public int updateMovieTitle(@Param("movieId") int id, @Param("movieTitle") String title);

    // will do the same thing as above
    // @Query("update Movie m set m.title = ?2 where id = ?1")
    // public void updateMovieTitle(@Param("movieId") int id, @Param("movieTitle") String title);


    /**
     * @NativeQuery
     *      - lets you write raw SQL queries
     *      - this is BAD PRACTICE
     */
    
}
