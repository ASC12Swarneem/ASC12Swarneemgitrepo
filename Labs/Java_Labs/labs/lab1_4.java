package labs;

import java.util.Scanner;

class WordCount{
    String str;
    WordCount(String str)
    {
        this.str = str;
    }

    int countWords(){
        int count = 0;
        count = str.split("\\s").length;
        System.out.println(count);
        return count;
    }
}

public class lab1_4 {
        public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        String str = sc.nextLine();
        WordCount string = new WordCount(str);
        string.countWords();
    }
}
