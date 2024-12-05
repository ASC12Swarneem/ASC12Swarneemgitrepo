package exception;

import java.util.Scanner;

public class MultipleExceptions {
    public static void main(String[] args) {
        int num1 = 0;
        int num2 = 10;

        int [] values = {10, 20, 30};

        try (Scanner sc = new Scanner(System.in)) {
            String num1Str = sc.nextLine();
            num1 = Integer  .parseInt(num1Str);
            System.err.println(num1/num2);
            System.err.println(values[3]);
        }
        catch (NumberFormatException numberFormatException){
            System.err.println("Invalid value for number");
        }
        catch (AgeInvalidException ageInvalidException){
            System.err.println("Cannot divide by 0");
        }
        catch (Throwable exception){
            System.err.println("All exception (which are not handeled above):");
            System.err.println(exception);
        }
    }
}
