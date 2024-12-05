package MultiThreading;

class Compute{
    public void odd(){
        for (int i=1; i<500; i+=2){
            System.out.println("ODD "+i);
        }
    }

    public void even(){
        for (int i=2; i<500; i+=2){
            System.out.println("EVEN "+i);
        }
    }
}

public class SingleThreadingEx {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
        Thread.currentThread().setName("Main thread");
        System.out.println(Thread.currentThread().getName());
        Compute compute = new Compute();
        compute.even();
        compute.odd();
    }
}
