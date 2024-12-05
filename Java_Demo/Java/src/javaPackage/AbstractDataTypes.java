package javaPackage;

public class AbstractDataTypes {

    //    Primitive types
// methods declared in class are called instance variables
    byte byteVar = -128;
    short shortVar = 32767;
    int intVar = -2147483647;
    long longVar = 9223372036854775807L;
    float floatVar = 134.456f;
    double doubleVar = 123.456;
    char charVar = 'A';
    boolean boolVar = true;

    public void display()
    {
        System.out.println("Displaying the values of instance variables inside method");
        System.out.println("byteVar: " + byteVar);
        System.out.println("shortVar: " + shortVar);
        System.out.println("intVar: " + intVar);
        System.out.println("longVar: " + longVar);
        System.out.println("floatVar: " + floatVar);
        System.out.println("doubleVar: " + doubleVar);
        System.out.println("charVar: " + charVar);
        System.out.println("boolVar: " + boolVar);
    }

    public static void main(String[] args)
    {
        // AbstractDataType is a class, which is a user defined data type/ abstract data type
        // abstractDataType is a reference variable
        // new is a keyword, which is used to create an object
        // AbstractDataType() is a constructor
        AbstractDataTypes abstractDataType = new AbstractDataTypes();
        System.out.println(abstractDataType.byteVar);
        System.out.println(abstractDataType.shortVar);
        System.out.println(abstractDataType.intVar);
        System.out.println(abstractDataType.longVar);
        System.out.println(abstractDataType.floatVar);
        System.out.println(abstractDataType.doubleVar);
        System.out.println(abstractDataType.charVar);
        System.out.println(abstractDataType.boolVar);

        // calling a method
        abstractDataType.display();

    }
}