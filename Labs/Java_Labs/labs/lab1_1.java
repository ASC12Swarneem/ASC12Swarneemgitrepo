package labs;

class AddMethodsTest{
    int a,b,c;

    int add(int a, int b){
        return a+b;
    }

    short add(short a, short b){
        return (short)(a+b);
    }

    int add(int a, int b, int c){
        return a+b+c;
    }

    float add(float a, float b){
        return a+b;
    }

    String add(String str, int c){
        return str+" "+c;
    }
}
public class lab1_1 {
    public static void main(String[] args) {
        AddMethodsTest test = new AddMethodsTest();
        System.out.println(test.add(10, 20));
        System.out.println(test.add(10, 20, 30));
        System.out.println(test.add(10.5f, 20.1f));
        System.out.println(test.add("Hello", 20));
    }

}
