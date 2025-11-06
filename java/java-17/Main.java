public class Main {

    public static void main(String[] args) {
        
        UserDTO_Class dtoClass = new UserDTO_Class("000ABC123", "Hiep Sultan", "hsultan@skillstorm.com", 89);
        System.out.println(dtoClass.toString());


        UserDTO_Record dtoRecord = new UserDTO_Record("000XYZ123", "Liam Ahmad", "lahmad@skillstorm.com", 12);

        System.out.println(dtoRecord.toString());

        // getters for records are just the name of the property
        System.out.println("Age: " + dtoRecord.age());
        System.out.println("Id: " + dtoRecord.id());
        System.out.println("Name: " + dtoRecord.name());
        System.out.println("Email: " + dtoRecord.email());

        // calling custom method
        System.out.println(dtoRecord.displayName());
    }
}
