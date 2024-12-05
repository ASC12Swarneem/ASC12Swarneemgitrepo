package labs;
import java.security.spec.RSAOtherPrimeInfo;
import java.util.Scanner;

class StringEx{
    Scanner sc = new Scanner(System.in);
    String str;

    StringEx(){

    }

    void stringOps(String str){
        System.out.println("Character at Method:");
        System.out.println(str.charAt(1));
        System.out.println("\n");

        System.out.println("Contains Method:");
        System.out.println(str.contains("r"));
        System.out.println("\n");

        System.out.println("Length Method:");
        System.out.println(str.length());
        System.out.println("\n");

        System.out.println("Index of Method:");
        System.out.println(str.indexOf("r"));
        System.out.println("\n");


        System.out.println("Equals Method:");
        System.out.println("Enter another string");
        String strEx = sc.next();
        System.out.println(str.equals(strEx));
        System.out.println("\n");

        System.out.println("Equals Ignore Case Method:");
        System.out.println(str.equalsIgnoreCase(strEx));
        System.out.println("\n");

        System.out.println("Join Method:");
        System.out.println(String.join(str, strEx));
        System.out.println("\n");

        System.out.println("Substring Method:");
        System.out.println(str.substring(3,8));
        System.out.println("\n");

        System.out.println("Upper Case Method :");
        System.out.println(str.toUpperCase());
        System.out.println("\n");

        System.out.println("Lower Case Method :");
        System.out.println(str.toLowerCase());
        System.out.println("\n");

        System.out.println("Trim method :");
        System.out.println(str.trim());
        System.out.println("\n");
    }

}

public class lab1_5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringEx stringEx = new StringEx();
        System.out.println("Enter a string");
        stringEx.str = sc.nextLine();
        stringEx.stringOps(stringEx.str);
    }
}