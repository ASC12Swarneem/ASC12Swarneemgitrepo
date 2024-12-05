package labs;

import java.util.Scanner;
import java.util.Arrays;

class ArrayStor{
    Scanner sc = new Scanner(System.in);

    int [] arr = new int[10];
    ArrayStor(int [] arr){
        this.arr = arr;
    }

    void for_loop(){
        System.out.println("Displaying array using for loop:");
        for(int i=0; i<10 ; i++){
            System.out.println("Element at index "+(i+1)+": "+arr[i]);
        }
    }

    void while_loop(){
        int i=0;
        System.out.println("Displaying array using while loop:");
        while (i<10){
            System.out.println("Element at index "+(i+1)+": "+arr[i]);
            i++;
        }
    }

    void sortArray(){
//        System.out.println("Sorted array is:");
        Arrays.sort(arr);
        System.out.println("Sorted array is: "+ Arrays.toString(arr));
    }

    void countNum(int num){
        int count = 0;
        for(int i=0; i<10; i++){
            if(arr[i]==num){
                count++;
            }
        }
        System.out.println("Occurence of number "+num+" in array is: "+count);
    }

    void numAtIndex(int index, int insertNum){
        for (int i=0; i<10; i++){
            if(index==i){
                arr[i]=insertNum;
            }
        }
        System.out.println("New array is:");
        for(int i=0; i<10; i++) {
            System.out.println(arr[i]);
        }
    }

}
public class lab1_6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter an array: ");
        int [] array = new int[10];
        for(int i=0; i<10; i++){
            array[i] = sc.nextInt();
        }
        ArrayStor arr = new ArrayStor(array);
        arr.for_loop();
        arr.while_loop();
        arr.sortArray();

        System.out.println("Enter the number which you want to search in the array: ");
        int num = sc.nextInt();
        arr.countNum(num);

        System.out.println("Enter the number which you want to enter");
        int index, insertnum;
        insertnum = sc.nextInt();
        System.out.println("Now enter the index(1-10)");
        index = sc.nextInt();
        if(index>10){
            System.out.println("Enter a number between 1-10!!");
            insertnum = sc.nextInt();
        }
//        System.out.println(insertnum);

        arr.numAtIndex(index, insertnum);
    }
}
