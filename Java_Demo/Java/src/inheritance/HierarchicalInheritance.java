package inheritance;

class Vehicle{
    void Honk(){
        System.out.println("Honking...");
    }

    Vehicle(){}
}

class TwoWheeler extends Vehicle{
    void Drive(String name){
        System.out.println("Driving a "+name);
    }


    
}

class FourWheeler extends Vehicle{
    void Drive(String name){
        System.out.println("Driving a "+name);
    }
}

public class HierarchicalInheritance {
    public static void main(String[] args) {
        FourWheeler car = new FourWheeler();
        car.Drive("Bugatti");
        car.Honk();
        TwoWheeler bike = new TwoWheeler();
        bike.Drive("Activa");
        bike.Honk();
    }
}
