package javaPackage;

// import java.lang.Object;

class Car{
    //Instance Variables are the once that are declared inside the class
//    String type = "Gasoline";
//    int price = 190000;

    String type;
    int price;

    Car(String type, int price)
    {
        this.type = type;
        this.price = price;
    }

    void carDetails()
    {
        System.out.println("Car details are, type; " + type + "and price is: " +price );
    }


    @Override
    public String toString(){
        String message = "Type of car: " + type + "\n Price of car: "+ price;
        return message;
    }

}
public class ClassAndObjects {
    public static void main(String[] args) {
        Car car  = new Car("sss", 222);
        car.carDetails();
        String message = car.toString();
        System.out.println(message);
    }

}
