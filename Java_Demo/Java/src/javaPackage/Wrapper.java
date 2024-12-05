package javaPackage;

public class Wrapper {
    public static void main(String[] args) {
        float floatPrimitive = 5f;
        Float floatWrapper = new Float(floatPrimitive);
        byte byteValue = floatWrapper.byteValue();
        System.out.println("Bytevalue: " + byteValue);

        System.out.println(floatWrapper.describeConstable());
    }
}