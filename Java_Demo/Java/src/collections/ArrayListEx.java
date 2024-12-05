package collections;

import java.util.ArrayList;

public class ArrayListEx {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<String>();
        colors.add("Red");
        colors.add("Orange");
        colors.add("Yellow");
        colors.add("Blue");
        colors.add("Green");
        colors.add("Violet");
        colors.add(1,"Black");

        String color1 = colors.get(1);
        System.out.println("Color 1: "+color1);
        String color2 = colors.get(2);
        System.out.println("Color 2: "+color2);


        System.out.println(colors);
        System.out.println(colors.size());
        System.out.println(colors.contains("Green"));
        System.out.println(colors.contains("Indigo"));
        System.out.println(colors.isEmpty());
        System.out.println(colors.equals(2));
    }
}
