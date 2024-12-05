package labs;
import java.util.Scanner;

public class lab2_2 {
    public void welcome(String name) {
        System.out.println("Hello "+name+", Welcome to Java World! ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name;
        name = sc.nextLine();
        lab2_2 object = new lab2_2();
        object.welcome(name);
    }
}
