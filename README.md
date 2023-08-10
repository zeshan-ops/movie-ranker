# Movie Ranker
A tool that ranks movies you've watched by asking you to compare them. There is a CLI-tool for this and a JS web-interface program. Movies are chosen from the IMDB Top 250.

## CLI-Install and instructions
Compile the cli-tool/main.cpp file using your compiler of choice, uses auto so use c++11 standard or higher.

`g++ -std=c++20 -o movie-ranker main.cpp`

The program runs on call, you will be asked to pick between two movies, choose the one that you prefer and repeat until the program completes. Upon completion, your Top 10 List will be printed to the console.

Note: At the start when comparing against blanks, choose the movie over the blanks unless you are sure the movie will not make it to your top 10.
