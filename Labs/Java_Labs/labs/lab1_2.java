package labs;

public class lab1_2 {
    static class Student{

        int studentID, marks1, marks2, marks3, total =0;
        String name, city;
        float feesPerMonth, average;


        //Constructor
        Student(int studentID, int marks1, int marks2, int marks3, String city, String name, float feesPerMonth){
            this.studentID = studentID;
            this.marks1 = marks1;
            this.marks2 = marks2;
            this.marks3 = marks3;
            this.city = city;
            this.name = name;
            this.feesPerMonth = feesPerMonth;
        }

        void studentDetails(){
            System.out.println("ID of Student: "+studentID);
            System.out.println("Name of Student: "+name);
            System.out.println("City of Student: "+city);
        }

        float getAnnualFees(){
            return feesPerMonth*12;
        }

        int getTotalmarks(){
            total = marks1+marks2+marks3;
            return total;
        }

        float getAverage(){
            average = total/3;
            return average;
        }

        boolean getResult(){
            boolean isPass=false;
            if(average>=60){
                isPass = true;
        }
            return isPass;
        }
    }
//        int fees;
//        float total_marks, average, result;
//
//        StudentTest(){
//
//        }
//
//        StudentTest(int fees, float total_marks, float average, float result){
//            this.fees = fees;
//            this.total_marks = total_marks;
//            this.average = average;
//            this.result = result;
//        }
//
//        int getAnnualFees(int fees){
//            return fees*12;
//        }
//
//        float getTotal_marks(float m1, float m2, float m3, float m4, float m5){
//            float total = m1+m2+m3+m4+m5;
//            return total/5.0f;
//        }
//
//        float getAverage(float total_marks){
//            return total_marks/5.0f;
//        }
//
//        float getResult(float average){
//             if(average*100f>60.0f){
//                 System.out.println("Pass");
//             }
//             else
//             {
//                 System.out.println("Fail");
//             }
//        }
//    }
    public static void main(String[] args) {

        Student Student1 = new Student(1, 80, 80, 50, "Nagpur", "Swarneem" ,800.90f);
        Student1.studentDetails();
        System.out.println("Annual fees: "+Student1.getAnnualFees());
        System.out.println("Total marks: "+Student1.getTotalmarks());
        System.out.println("Average: "+Student1.getAverage());
        System.out.println("Result: "+Student1.getResult());

//        StudentTest student1 = new StudentTest();
//        System.out.println("Annual fees is: "+ student1.getAnnualFees(500));
//
//        float total = student1.getTotal_marks(5.0f, 6.3f, 7.3f, 2.6f, 7.9f);
//        System.out.println("Total marks are: "+ total);
//        float average = student1.getAverage(total);
//        System.out.println("Average marks are: "+ average);
//        float result = student1.getResult(average);
//        System.out.println("Result is: "+ result);

    }
}
