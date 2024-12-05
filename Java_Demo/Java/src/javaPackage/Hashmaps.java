package javaPackage;
import java.util.HashMap;

public class Hashmaps{
    public static void main(String[] args){
        HashMap<String, Integer> map = new HashMap<>();

        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 35);
        map.put("Swarneem", 23);
        map.put("Rohit", 23);
        map.put("Gaurav", 23);
        map.put("Mishra", 23);
        System.out.println(map);
        System.out.println("Size of hashmap: "+ map.size());
    }
}