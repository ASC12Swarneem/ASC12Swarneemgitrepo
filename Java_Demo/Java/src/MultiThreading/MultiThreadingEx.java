package MultiThreading;

 class Compute1{
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

class Odd extends Thread{
    // override the run method
    public void run() {
        Compute1 compute = new Compute1();
        compute.odd();
    }
}

class Even extends Thread {
    // override the run method
    public void run() {
        Compute1 compute = new Compute1();
        compute.even();
    }
}

public class MultiThreadingEx {
     public static void main(String[] args) {
         Thread.currentThread().setName("Main thread");
         System.out.println(Thread.currentThread().getName() + " is the main thread");
         Odd oddThread = new Odd();
         Even evenThread = new Even();

         oddThread.start();
         evenThread.start();
         try {
             oddThread.join();
             evenThread.join();
         } catch (InterruptedException interruptedException) {
             System.out.println("Thread interrupted: " + interruptedException.getMessage());
         }
         System.out.println(Thread.currentThread().getName() + " is ending the game!");
     }
 }
