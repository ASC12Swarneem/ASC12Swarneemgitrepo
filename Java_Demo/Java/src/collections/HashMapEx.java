package collections;

import java.util.HashMap;

public class HashMapEx {
    public static void main(String[] args) {
        HashMap<String, Integer> countryCodeMap = new HashMap<String, Integer>();
        countryCodeMap.put("USA", 1);
        countryCodeMap.put("India".toUpperCase(), 91);
        countryCodeMap.put("Singapore", 65);
        countryCodeMap.put("China", 86);
        countryCodeMap.put("Japan".toUpperCase(), 81);
        countryCodeMap.put("Japan", 81);
        countryCodeMap.put("Japan", 81);
        System.out.println(countryCodeMap);
        System.out.println(countryCodeMap.isEmpty());
        System.out.println(countryCodeMap.size());
        System.out.println(countryCodeMap.containsValue(81));
        System.out.println(countryCodeMap.containsValue(92));

        //Perform a search operation for the
        System.out.println(countryCodeMap.get("Singapore"));
        System.out.println(countryCodeMap.containsKey("Singapore"));
        System.out.println(countryCodeMap.containsValue(65));

        countryCodeMap.put(null, 99);
        countryCodeMap.put("null", 99);
        countryCodeMap.put("null", 999);

    }
}
