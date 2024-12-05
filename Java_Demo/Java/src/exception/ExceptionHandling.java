package exception;

public class ExceptionHandling {

    public static void called(){
        String test = "Welcome";
        String upperCase = test.toUpperCase();
        System.out.println("Called()");
        called();
        System.out.println("end");
    }
    public static void main(String[] args) {
        int num1=0, num2=200;
        int result = 0;

        try{
            result = num2/num1;
//        }catch (ArithmeticException e){
//            System.out.println(e.getMessage());
        }
            finally
        {
            System.out.println("closed");
        }
        System.out.println(result);

    }
}
