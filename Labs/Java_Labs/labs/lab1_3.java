package labs;
import java.util.Scanner;
class Table{
    int num;

    Table(){

    }
//
//    Table(int num){
//        this.num = num;
//    }

    void for_loop(int n){
        System.out.println("Using for loop:");
        for(int i=1; i<=20; i++){
            System.out.println(n+" * "+i+" = "+i*n);
        }
    }

    void while_loop(int n){
        System.out.println("Using while loop:");
        int i = 1;
        while(i<=20)
        {
            System.out.println(n+" * "+i+" = "+i*n);
            i++;
        }
    }

    void do_while(int n){
        System.out.println("Using do_while loop:");
        int i = 1;
        do
        {
            System.out.println(n+" * "+i+" = "+i*n);
            i++;
        }while(i<=20);
    }
}

public class lab1_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        Table table = new Table(2);
        Table table = new Table();
        System.out.println("Enter the number for which you want to print table: ");
        int n = sc.nextInt();

        table.for_loop(n);
        table.while_loop(n);
        table.do_while(n);
    }
}
