package collections;

//import java.util.HashMap;
//import java.util.HashSet;
import java.util.*;

public class SetEx {
    public static void main(String[] args) {
        HashSet<String> colours = new HashSet<String>();
        colours.add("Red");
        colours.add("Orange");
        colours.add("Yellow");
        colours.add("Blue");
        colours.add("Green");
        colours.add("Violet");

        //In arrays the index is supported but it is not supported in the set
        //Set is not an indexed data structure, it is a collection of unique elements
        //Set is an interface in java.util package
        //Set is collection of class in java
        //Set is a generic class

        System.out.println(colours);
        System.out.println(colours.size());
        System.out.println(colours.toArray());

//        colours.add(null);
//        colours.add("Orange");
        
    }
}
