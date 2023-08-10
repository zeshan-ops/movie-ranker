#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>

struct movie {
    std::string name;
    int rank;
};

bool compareRanks(movie m1, movie m2) {
    return m1.rank < m2.rank;
}

void movieRanker(std::vector<movie>& top10List, movie newMovie) {
    int finalPosition = 0;

    for(int i = 0; i<top10List.size(); i++) {
        std::string comparison;
        std::cout << "\nWhich one is better?\n"
                  << "1. " << top10List[9-i].name << "\n"
                  << "2. " << newMovie.name << "\n";
        std::cin >> comparison;
        if(comparison == "1") {
            finalPosition = 9-i+1;
            break;
        }
    }

    newMovie.rank =  finalPosition;

    top10List.insert(top10List.begin()+finalPosition, newMovie);
    top10List.pop_back();
}

std::vector<movie> databaseLoader(std::string filename) {
    std::ifstream input(filename);

    std::vector<movie> movieList;

    std::string temp, title;

    while(std::getline(input, temp)) {
        title = temp.substr(0, temp.find_last_of(','));
        movie m;
        m.name = title;
        movieList.push_back(m);
    }

    return movieList;
}

int main() {
    std::vector<movie> imdbTop250;

    imdbTop250 = databaseLoader("imdbTitlesAndRatings.csv");

    std::vector<movie> top10List;

    for(int i; i<10; i++) {
        movie m;
        m.name = "BLANK";
        m.rank = i;
        top10List.push_back(m);
    }

    sort(top10List.begin(), top10List.end(), compareRanks);

    // MAIN FUNCTION RUNNER
    for(int i; i < imdbTop250.size(); i++) {
        movieRanker(top10List, imdbTop250[i]);
    }
    
    // PRINTING TOP10 LIST
    std::cout << "\n" << "Your TOP10 List:\n";

    for(auto mov : top10List) {
        std::cout << mov.name << "\n";
    }

    // TESTS

    /* DATABASE READER TEST

    std::cout << "Size of database: " << imdbTop250.size() << "\n";
    std::cout << "Contents:" << "\n";
    for(auto movie : imdbTop250) {
        std::cout << movie.name << "\n";
    }
    */

    return 0;
}