package inheritance;

public class SingleInheritance {
    static class A{
        A(){
            System.out.println("This is class A constructor");
        }

        void display(){
            System.out.println( "This is the class method which will be inherited");
        }

    }

    static class B extends A{
        B(){
            System.out.println("This is class B constructor");
        }
    }
    public static void main(String[] args) {
        A a = new A();
        a.display();
        B b = new B();
        b.display();
    }
}
