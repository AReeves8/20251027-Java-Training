package com.skillstorm.spring_data_jpa_demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity                             // tells spring jpa this is a database table AND A BEAN
@Table(name = "MOVIES")             // only needed if your db table is a different name than your class
public class Movie {

    @Id                                                     // tells jpa this is our primary key
    @Column                                                 // this is a database column
    @GeneratedValue(strategy = GenerationType.IDENTITY)     // tells jpa this is an auto-increment field
    private int id;

    @Column(name = "movie_title")                           // specifies that this corresponds to the "movie_title" column
    private String title;

    @Column
    private int rating;

    @ManyToOne                                              // this jpa this class is the MANY side of the relationship
    @JoinColumn(name = "director_id")                       // tells jpa that there is a relationship to this other model
    private Director director;

    public Movie() {
    }

    public Movie(int id, String title, int rating, Director director) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.director = director;
    }

    public Movie(String title, int rating, Director director) {
        this.title = title;
        this.rating = rating;
        this.director = director;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Director getDirector() {
        return director;
    }

    public void setDirector(Director director) {
        this.director = director;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + rating;
        result = prime * result + ((director == null) ? 0 : director.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Movie other = (Movie) obj;
        if (id != other.id)
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (rating != other.rating)
            return false;
        if (director == null) {
            if (other.director != null)
                return false;
        } else if (!director.equals(other.director))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "MOVIES [id=" + id + ", title=" + title + ", rating=" + rating + ", director=" + director + "]";
    }



    

}
