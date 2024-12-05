package javaPackage;

import java.text.ParseException;
import java.util.Date;
import java.util.Scanner;
import java.text.SimpleDateFormat;

class Issues{
    Scanner sc = new Scanner(System.in);

    int issueID;
    String title, description, assignee;
    enum Priority{
        LOW,
        MEDIUM,
        HIGH
    };
    Priority priority;
    enum Status{
        OPEN,
        IN_PROGRESS,
        RESOLVED,
        CLOSED
    };
    Status status;
    Date date;

    Issues(){
        //Constructor without parameter
    }

    //Parameterized constructor
    Issues(int issueID,
           String title,
           String description,
           String assignee,
           Status status,
           Priority priority,
           Date date)
    {
        this.issueID = issueID;
        this.title = title; 
        this.description = description;
        this.assignee = assignee;
        this.status = status;
        this.priority = priority;
        this.date = date;
    }

    @Override
    public String toString()
    {
        String message = "IssueID: "+ issueID +"\nTitle: "+ title+"\nDescription: " +description + "\nAssignee: "+assignee+"\nStatus: "+status+"\nPriority: "+priority+"\nDate: "+ date;
                return message;
    }

    Issues getIssue()
    {
        System.out.println("Enter issue id");
        issueID = sc.nextInt();

        System.out.println("Enter issue Title");
        sc.nextLine();
        title = sc.nextLine();

        System.out.println("Enter issue Description");
        description = sc.nextLine();

        System.out.println("Enter issue Assignee");
        assignee = sc.nextLine();

        // Input for Status (convert string to enum)
        System.out.println("Enter issue Status (OPEN, IN_PROGRESS, RESOLVED, CLOSED):");
        String statusInput = sc.nextLine().toUpperCase();
        status = Status.valueOf(statusInput);

        // Input for Priority (convert string to enum)
        System.out.println("Enter issue Priority (LOW, MEDIUM, HIGH):");
        String priorityInput = sc.nextLine().toUpperCase();
        priority = Priority.valueOf(priorityInput);

//        System.out.println("Enter issue Date (yyyy-MM-dd):");
//        String dateInput = sc.nextLine();
//        date = new Date(dateInput);

        System.out.print("Enter a date (dd/mm/yyyy): ");
        String dateStr = sc.next();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        try
        {
            this.date = sdf.parse(dateStr);
//            Date date = sdf.parse(dateStr);
        }
        catch (ParseException e)
        {
            throw new RuntimeException(e);
        }

        //This getissue function should return issue
        Issues issues = new Issues(issueID,title,description,assignee,status,priority,date);
        return issues;
    }

    public static Issues searchIssue(int searchID, Issues [] issueArr)
    {
        for(Issues issue: issueArr)
        {
            if (searchID==issue.issueID){
                System.out.println("Issue with id: " + searchID + "found:\n");
                return issue;
            }else {
                System.out.println("Issue not found");
            }
        }
        System.out.println("Issue not found");
        return null;
    }
}

public class IssueEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.close();

        Issues issue = new Issues();
//        issue1.getIssue();

        System.out.println("Array input");
        Issues[] issueArr = new Issues[3];

        for (int i = 0; i < 3; i++)
        {
            System.out.println("\n");
            System.out.println("Enter Issue no"+ (i+1));
            issueArr[i] = issue.getIssue();
        }


        for (int i = 0; i < 3; i++)
        {
            System.out.println("\n");
            System.out.println("Issue no:"+ (i+1));
            String message = issueArr[i].toString();
            System.out.println(message);
        }

        System.out.println("Enter ID you want to search\n");
        int searchID = sc.nextInt();
        Issues result = Issues.searchIssue(searchID, issueArr);
        System.out.println(result);


//        Issues issue1 = new Issues(1, "Login Issue", "User are facing issues in login page", "Subbu", Issues.Status.Closed, Issues.Priority.HIGH, new Date());
//        String message = issue1.toString();
//        System.out.println(message);
//
//        Issues issue2 = new Issues(2, "Login Issue", "User are facing issues in login page", "Subbu", Issues.Status.Closed, Issues.Priority.HIGH, new Date());
//        Issues issue3 = new Issues(3, "Login Issue", "User are facing issues in login page", "Subbu", Issues.Status.Closed, Issues.Priority.HIGH, new Date());
    }
}
