package collections;
import java.util.TreeMap;

public class TreeMapEx {
    public static void main(String[] args) {
        TreeMap<String, Integer> countryCodeMap = new TreeMap<String, Integer>();
        countryCodeMap.put("USA", 1);
        countryCodeMap.put("India".toUpperCase(), 91);
        countryCodeMap.put("Singapore", 65);
        countryCodeMap.put("China", 86);
        countryCodeMap.put("Japan".toUpperCase(), 81);
        countryCodeMap.put("Japan", 81);
        countryCodeMap.put("Japan", 81);
        System.out.println(countryCodeMap);
    }
}
