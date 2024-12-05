package FileHandling;

import java.io.*;


public class ObjectOutputStreamEx {
    public static void main(String[] args) {
        File file = new File("product.dat");

        try{
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
            ProductModel productModel = new ProductModel("P001", "Laptop", 10000);
            objectOutputStream.writeObject(productModel);

            productModel = new ProductModel("P02", "Mobile", 10050);
            objectOutputStream.writeObject(productModel);
            System.out.println("Product details are written to the file");
        }
        catch (FileNotFoundException fileNotFoundException){
            System.out.println("Error " + fileNotFoundException.getMessage());
        } catch (IOException ioException) {
            System.out.println("IO exceeption "+ ioException.getMessage()   );;
        }
    }
}
