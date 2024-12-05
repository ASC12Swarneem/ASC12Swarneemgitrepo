package OOPS;

interface Netbanking{
    public abstract void displayAccount();
    void transferAccount();
    void checkAccount();
}

interface DebitCard{
    public void checkAccountBalance();
    public void withdraw();
}

class SavingsAccount implements Netbanking, DebitCard{

    @Override
    public void checkAccountBalance() {
        System.out.println("Check user account balance");
    }

    @Override
    public void withdraw() {
        System.out.println("Withdrawig amount");
    }

    @Override
    public void displayAccount() {
        System.out.println("Displaying account details");
    }

    @Override
    public void transferAccount() {
        System.out.println("Transferring amount from savings account");
    }

    @Override
    public void checkAccount() {
        System.out.println("Displaying account balance");
    }
}

public class AbstractionWithInterfaceEx {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount();
        savingsAccount.checkAccount();
        savingsAccount.displayAccount();
        savingsAccount.checkAccountBalance();
        savingsAccount.transferAccount();
        savingsAccount.withdraw();


        //Dynamic Polymorphism
        DebitCard debitCard = new SavingsAccount();
        debitCard.checkAccountBalance();
        debitCard.withdraw();
    }
}