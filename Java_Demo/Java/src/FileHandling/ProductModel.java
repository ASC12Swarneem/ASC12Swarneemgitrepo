package FileHandling;
//
//}
//Classes encapsulate data members (fields, attributes) and methods (functions, routines)
//Marker interface Serializable with no methods. They provide runtime with information.
public class ProductModel implements java.io.Serializable {
    // member fields
    private String productId;
    private String productName;
    private float price;

    // overloading : multiple methods with same name but different signature (no,
    // order, type of arguments)
    // default constructor
    public ProductModel() {
//        productId = "P01";
//        productName = "Laptop";
//        price = 500.50f;
    }

    public ProductModel(String productId, String productName, float price) {
        super();
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    // member functions
    public void displayDetails() {
        System.out.println(productId);
        System.out.println(productName);
        System.out.println(price);
    }
    @Override
    public String toString() {
        String productModelString = "Pid : " + productId + "\nName : " + productName + "\nPrice : " + price;
        return productModelString;
    }
}

//package FileHandling;
//
//import java.io.Serializable;
//
//public class ProductModel implements Serializable {
//    private static final long serialVersionUID = 1L;
//
//    private String productID;
//    private String productName;
//    private int productPrice;
//
//    ProductModel(String productID, String productName, int productPrice)
//    {
//        this.productID = productID;
//        this.productName = productName;
//        this.productPrice= productPrice;
//    }
//
//    @Override
//    public String toString(){
//        return "ProductModel [productID=" + productID +", productName= "+productName + "]";
//    }
//
//    //Setter or mutator method
//    public void setproductPrice(int productPrice){
//        if(this.productPrice < 0 || this.productPrice > 100000){
//            System.out.println("Invalid product price");
//            return;
//        }
//        this.productPrice = productPrice;
//    }
//
//    //Getter or accessor method
//    public int getProductPrice(){
//        return productPrice;
//    }
//
//    public void setProductID(String productID) {
//
//        this.productID = productID;
//    }
//
//    public String getProductID() {
////        int startIndex = 2;
////        productID.substring(startIndex);
//        return productID;
//    }
//
//    public static void main(String[] args) {
////        model.ProductModel productModel = new model.ProductModel();
////        System.out.println(productModel);
////        System.out.println(productModel);
////        productModel.setproductPrice(2000);
////        System.out.println(productModel.productPrice);
////        productModel.setproductPrice(1000000);
////        System.out.println(productModel.productPrice);
////        System.out.println(productModel.getProductID().substring(2));
//    }
//}
