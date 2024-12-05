package JDBC;

import java.sql.*;

public class JDBC_Insert {
    public static void main(String[] args) {
        try
        {
            System.out.println("Step_1: Establishing a connection to database.");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb1","root", "root");

            System.out.println("Step_2: Create the Statement.");
            Statement statement = connection.createStatement();

            System.out.println("Step_3: Execute the query");
            int noOfRowsAffected = statement.executeUpdate("INSERT INTO USER(USER_ID, EMAIL_ID, FIRST_NAME, LAST_NAME) VALUES(2, 'USER@GMAIL.COM', 'SWARNEEM', 'NANDANWAR');");

            System.out.println("Step_4: Process the status");
            if(noOfRowsAffected>0){
                System.out.println(noOfRowsAffected+" Record inserted successfully");
            }else{
                System.out.println("Record not inserted successfully");
            }
        }
        catch (SQLException exception)
        {
            System.out.println("Error: Could not connect to dtabase. "+exception.getMessage());
        }
    }
}
