package exception;

class Test{
    int value = 10;
}

public class MultipleExceptionSingleCatch {
    public static void main(String[] args) {
        System.out.println();
        Test test = null;

        try {
            System.out.println(test.value);
            System.err.println("do");
            int i = 200;
            int result = i/0;
            System.out.println(result);
        }catch (NullPointerException | ArithmeticException e){
            System.out.println("Exception");
            System.out.println(e.getMessage());
        }
    }
}
