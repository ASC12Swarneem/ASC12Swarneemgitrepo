package javaPackage;

public class StringEx {
    String message = "This is a string!";
    boolean result = message.endsWith("!");

    public static void main(String[] args){

        StringEx stringEx = new StringEx();
        System.out.println(stringEx.result);
        System.out.println(stringEx.message.length());
        System.out.println(stringEx.message.charAt(3));
        System.out.println(stringEx.message.contains("A"));
        System.out.println(stringEx.message.isBlank());
        System.out.println(stringEx.message.isEmpty());
        System.out.println(stringEx.message.indent(4));
        System.out.println(stringEx.message.indexOf("string"));
        System.out.println(stringEx.message.indexOf("a", 8));

        //Explore any 5 methods of string class
        //Print the characters from the string test by removing the special character
    }
}
