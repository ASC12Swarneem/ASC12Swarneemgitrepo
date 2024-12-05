package javaPackage;

import java.util.*;

public class ArrayEx {
    private void primitiveArray() {
// Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
// To declare an array, define the variable type with square brackets:
// Arrays are continuous memory locations
// Arrays are of fixed size
// Arrays are of same data type
// scope of intArray is within the method primitiveArray
        int intArray[] = new int[5];
        intArray[0] = 10;
        intArray[1] = 20;
        intArray[2] = 30;
        intArray[3] = 40;
        intArray[4] = 50;
        for (int i = 0; i < intArray.length; i++) {
            System.out.println("intArray[" + i + "] = " + intArray[i]);
        }
    }

    @SuppressWarnings("unchecked")
    private void referenceArray() {
        String [] names = new String[3];
        names[0] = "Bodha";
        names[1] = "Komal";
        names[2] = "Pallavi";

        for(int ctr =0 ; ctr < names.length; ctr++){
            System.out.println("names[" + ctr + "] = " + names[ctr]);
        }

        for(String name : names){
            System.out.println("name = " + name);
        }
//
        @SuppressWarnings("rawtypes")
        List namesList  = Arrays.asList(names);
        namesList.forEach(name -> System.out.println(name));
//
        namesList.forEach(System.out::println);

        //Concise and modern syntax using java 8
        System.out.println("Modern syntax : using lambda and collection.");
        Arrays.asList(names).forEach(System.out::println);
    }
    public static void main(String[] args) {
        // Creating the reference variable of the class
        ArrayEx arrayEx = null;
        // instantiating the class
        arrayEx = new ArrayEx();
        arrayEx.primitiveArray();
        arrayEx.referenceArray();
    }

}

//package javaPackage;
//
//public class Arrays {
//    private void primitiveArray(){
//        int intArray[] = new int[5];
//        intArray[0] = 0;
//        intArray[1] = 1;
//        intArray[2] = 2;
//        intArray[3] = 3;
//        intArray[4] = 4;
//
//        for (int i = 0; i<intArray.length ; i++){
//            System.out.println("Element at ["+i+"]: " + intArray[i]);
//        }
//    }
//
//    public static void main(String[] args){
//        Arrays arrays = new Arrays();
//        arrays.primitiveArray();
//
//    }
//}
