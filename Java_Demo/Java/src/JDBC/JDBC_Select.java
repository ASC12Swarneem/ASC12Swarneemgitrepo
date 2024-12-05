package JDBC;
import java.sql.*;

public class JDBC_Select {
    public static void main(String[] args) {
        try
        {
            System.out.println("Step_1: Establishing a connection to the database.");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila", "root", "root");
//            Connection connection = DriverManager.getConnection("jdbc.sqlite:sample.db");

            System.out.println("Step_2: Create the statement.");
            Statement statement = connection.createStatement();

            System.out.println("Step_3: Execute the query.");
            ResultSet resultSet = statement.executeQuery("SELECT * FROM ACTOR");

            System.out.println("Step_4: Process the results.");
            while (resultSet.next()){
                System.out.println(resultSet.getInt(1)+ "\t" + resultSet.getString(2)+ "\t" +resultSet.getString("last_name"));
            }
        }
        catch (SQLException exception)
        {
//            System.err.println(exception.getMessage());
//            exception.printStackTrace();
            System.out.println("Error: Could not establish a connection "+exception.getMessage());
        }
    }
}
