# Movie Ranker
A tool that ranks movies you've watched by asking you to compare them. There is a CLI-tool for this and a JS web-interface program. Movies are chosen from the IMDB Top 250.

## CLI-Install and instructions
Compile the cli-tool/main.cpp file using your compiler of choice, uses auto so use c++11 standard or higher.

`g++ -std=c++20 -o movie-ranker main.cpp`

The program runs on call, you will be asked to pick between two movies, choose the one that you prefer and repeat until the program completes. Upon completion, your Top 10 List will be printed to the console.

Note: At the start when comparing against blanks, choose the movie over the blanks unless you are sure the movie will not make it to your top 10.

## Web-tool useage
Download the three files under `website-tool/` to the same folder on your computer. Then open the `index.html` file in your browser and enjoy.

## License and Notes
This repo is distributed under the MIT license.

Note, the code has not been unit-tested, it just looks like it works and does the job well enough for me. If you spot any bugs, do let me know.