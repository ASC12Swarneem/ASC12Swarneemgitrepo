package inheritance;

class Phone{
    void call(String name){
        System.out.println("Calling... "+ name);
    }
}

class SmartPhone extends Phone{
    void picture(String name){
        System.out.println("Clicking picture of "+name);
    }

    void video(){
        System.out.println("Shooting a video");
    }
}

class FeaturePhone extends SmartPhone{

}

public class MultiLevelInheritance{
    public static void main(String[] args) {
        FeaturePhone fp = new FeaturePhone();
        fp.call("Swarneem");
        fp.picture("Swarneem");
        fp.video();
    }
}
