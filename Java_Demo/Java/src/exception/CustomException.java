package exception;

class AgeInvalidException extends RuntimeException{
    public AgeInvalidException(String message){
        super(message);
    }
}

public class CustomException {
    public static void main(String[] main) {
        int age = 100;
        try
        {
            if (age < 21 || age > 60) {
                AgeInvalidException ageInvalidException = new AgeInvalidException("Invalid age, you are not eligible for this job");
                throw ageInvalidException;
            } else {
                System.out.println("You are eligible for this job");
            }
        }catch (AgeInvalidException error){
            System.out.println("Exception: " + error.getMessage());
        }
        System.out.println("Done");
    }
}


