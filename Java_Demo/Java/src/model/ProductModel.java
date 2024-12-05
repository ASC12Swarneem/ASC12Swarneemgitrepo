package model;
//Model is used to represent data from database
public class ProductModel {

    private String productID = "ISP001";
    private String productName = "Laptop";
    public int productPrice = 1000;

    @Override
    public String toString(){
        return "ProductModel [productID=" + productID +", productName= "+productName + "]";
    }

    //Setter or mutator method
    public void setproductPrice(int productPrice){
        if(this.productPrice < 0 || this.productPrice > 100000){
            System.out.println("Invalid product price");
            return;
        }
        this.productPrice = productPrice;
    }

    //Getter or accessor method
    public int getProductPrice(){
        return productPrice;
    }

    public void setProductID(String productID) {

        this.productID = productID;
    }

    public String getProductID() {
//        int startIndex = 2;
//        productID.substring(startIndex);
        return productID;
    }

    public static void main(String[] args) {
        ProductModel productModel = new ProductModel();
        System.out.println(productModel);
        System.out.println(productModel);
        productModel.setproductPrice(2000);
        System.out.println(productModel.productPrice);
        productModel.setproductPrice(1000000);
        System.out.println(productModel.productPrice);
        System.out.println(productModel.getProductID().substring(2));
    }
}
