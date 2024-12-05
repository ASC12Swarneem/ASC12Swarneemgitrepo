package labs;

class Movie {
    String movieName, producedBy, directedBy, movieCategory;
    int year;
    float duration;

    Movie(String movieName, String producedBy) {
        this.movieName = movieName;
        this.producedBy = producedBy;
//        this.directedBy = directedBy;
//        this.movieCategory = movieCategory;
//        this.year = year;
//        this.duration = duration;
    }

    Movie(Movie Movie, String directedBy, String movieCategory, int year, float duration) {
        this.directedBy = directedBy;
        this.movieCategory = movieCategory;
        this.year = year;
        this.duration = duration;
    }
}

public class lab3_1 {
    public static void main(String[] args) {

    }
}
