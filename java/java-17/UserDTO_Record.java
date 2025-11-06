

// records are like final classes - cannot extend any classes but they can implement interfaces
public record UserDTO_Record(
    String id, 
    String name, 
    String email, 
    int age
) {

    // defined constructor
    public UserDTO_Record {
        // this(id, name, email, age);       basically auto-calling "this" then running rest of code
        
        if(age < 0){
            throw new IllegalArgumentException("Age cannot be negative");
        }        
    }

    // defining your own method
    public String displayName() {
        return name.toUpperCase();
    }
}
