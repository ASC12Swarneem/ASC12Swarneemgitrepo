package javaPackage;

public class DefaultConstructor {
    int intVar;
    float floatVar;
    boolean boolVar;
    // DefaultConstructor() {
    //     System.out.println("This is the constructor");
    //     //Instance variables
    //     int x;
    //     int y;
    //     boolean z;
    // }

    public static void main(String[] args) {
//        DefaultConstructor defaultConstructor = new DefaultConstructor();
        //Creating a reference and then object
        DefaultConstructor defaultConstructor;
        defaultConstructor = new DefaultConstructor(1,2.0f,false);
//        System.out.println(defaultConstructor.intVar);
//        System.out.println(defaultConstructor.floatVar);
//        System.out.println(defaultConstructor.boolVar);

        System.out.println(defaultConstructor);
    }

    public DefaultConstructor(){
//        intVar = 2;
        floatVar = 4f;
        boolVar = true;
    }

    public DefaultConstructor(int intVar, float floatVar, boolean boolVar){
        this.intVar = intVar;
        this.floatVar = floatVar;
        this.boolVar = boolVar;
    }

    @Override
    public String toString() {
        return "DefaultConstructor{" +
                "intVar=" + intVar +
                ", floatVar=" + floatVar +
                ", boolVar=" + boolVar +
                '}';
    }
}
