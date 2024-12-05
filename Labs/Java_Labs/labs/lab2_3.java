package labs;

import java.util.Scanner;

public class lab2_3 {
    void greatest(int num1, int num2, int num3){
        int highest = num1;
        if(num2>highest){
            highest = num2;
        }
        if(num3>highest){
            highest = num3;
        }

        System.out.println("Highest number is: "+highest);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1, num2, num3;
        num1 = sc.nextInt();
        num2 = sc.nextInt();
        num3 = sc.nextInt();

        lab2_3 highest = new lab2_3();
        highest.greatest(num1, num2, num3);

//        int highest1 = Math.max(Math.max(num1, num2), num3);
//        System.out.println("Highest is "+highest1);
    }
}
