var counter = 0;
var newMovCounter = 0;
let top10List = [];

function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];

    for (const row of rows) {
        const values = row.split(',');
        result.push(values);
    }

    return result;
}

function loadMovieDatabase() {
    const input = `The Shawshank Redemption,9.3
    The Godfather,9.2
    The Godfather: Part II,9.0
    The Dark Knight,9.0
    12 Angry Men,8.9
    Schindler's List,8.9
    The Lord of the Rings: The Return of the King,8.9
    Pulp Fiction,8.9
    Il buono il brutto il cattivo,8.9
    Fight Club,8.8
    The Lord of the Rings: The Fellowship of the Ring,8.8
    Forrest Gump,8.8
    Star Wars: Episode V - The Empire Strikes Back,8.8
    Inception,8.8
    The Lord of the Rings: The Two Towers,8.7
    One Flew Over the Cuckoo's Nest,8.7
    Goodfellas,8.7
    The Matrix,8.7
    Shichinin no samurai,8.7
    Cidade de Deus,8.6
    Se7en,8.6
    Star Wars,8.6
    The Silence of the Lambs,8.6
    It's a Wonderful Life,8.6
    La vita è bella,8.6
    The Usual Suspects,8.6
    Sen to Chihiro no kamikakushi,8.6
    Saving Private Ryan,8.6
    Léon,8.6
    Spider-Man: Into the Spider-Verse,8.7
    The Green Mile,8.5
    Interstellar,8.6
    Psycho,8.5
    American History X,8.5
    City Lights,8.5
    C'era una volta il West,8.5
    Casablanca,8.5
    Modern Times,8.5
    The Pianist,8.5
    Intouchables,8.5
    The Departed,8.5
    Terminator 2: Judgment Day,8.5
    Back to the Future,8.5
    Whiplash,8.5
    Rear Window,8.5
    Raiders of the Lost Ark,8.5
    The Lion King ,8.5
    Gladiator,8.5
    The Prestige,8.5
    Apocalypse Now,8.5
    Memento,8.5
    Alien,8.5
    The Great Dictator,8.5
    Nuovo Cinema Paradiso,8.5
    Hotaru no haka,8.5
    Avengers: Infinity War,8.5
    Sunset Blvd.,8.4
    Das Leben der Anderen,8.4
    Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb,8.4
    Paths of Glory,8.4
    The Shining,8.4
    Django Unchained,8.4
    WALL·E,8.4
    Mononoke-hime,8.4
    Witness for the Prosecution,8.4
    American Beauty,8.4
    The Dark Knight Rises,8.4
    Oldeuboi,8.4
    Aliens,8.4
    Once Upon a Time in America,8.4
    Coco,8.4
    Das Boot,8.4
    Citizen Kane,8.4
    Braveheart,8.4
    Vertigo,8.3
    North by Northwest,8.3
    Reservoir Dogs,8.3
    Star Wars: Episode VI - Return of the Jedi,8.3
    M - Eine Stadt sucht einen Mörder,8.3
    Kimi no na wa.,8.4
    Amadeus,8.3
    Requiem for a Dream,8.3
    Dangal,8.5
    Taare Zameen Par,8.4
    Lawrence of Arabia,8.3
    Eternal Sunshine of the Spotless Mind,8.3
    A Clockwork Orange,8.3
    3 Idiots,8.4
    2001: A Space Odyssey,8.3
    Le fabuleux destin d'Amélie Poulain,8.3
    Toy Story,8.3
    Double Indemnity,8.3
    Taxi Driver,8.3
    Singin' in the Rain,8.3
    Inglourious Basterds,8.3
    Full Metal Jacket,8.3
    To Kill a Mockingbird,8.3
    Ladri di biciclette,8.3
    The Kid,8.3
    The Sting,8.3
    Good Will Hunting,8.3
    Toy Story 3,8.3
    Jagten,8.3
    Snatch,8.3
    Scarface,8.3
    Monty Python and the Holy Grail,8.3
    Per qualche dollaro in più,8.3
    L.A. Confidential,8.3
    The Apartment,8.3
    Metropolis,8.3
    Jodaeiye Nader az Simin,8.3
    Indiana Jones and the Last Crusade,8.2
    Rashômon,8.3
    Up,8.3
    All About Eve,8.3
    Batman Begins,8.3
    Yôjinbô,8.3
    Some Like It Hot,8.2
    Unforgiven,8.2
    Der Untergang,8.2
    Die Hard,8.2
    The Treasure of the Sierra Madre,8.2
    Heat,8.2
    Ikiru,8.3
    Incendies,8.2
    Raging Bull,8.2
    The Great Escape,8.2
    Bacheha-Ye aseman,8.3
    El laberinto del fauno,8.2
    Babam ve Oglum,8.4
    Chinatown,8.2
    The Third Man,8.2
    Bohemian Rhapsody,8.3
    Tonari no Totoro,8.2
    Hauru no ugoku shiro,8.2
    Ran,8.2
    Judgment at Nuremberg,8.2
    El secreto de sus ojos,8.2
    The Gold Rush,8.2
    The Bridge on the River Kwai,8.2
    A Beautiful Mind,8.2
    Lock Stock and Two Smoking Barrels,8.2
    Casino,8.2
    Three Billboards Outside Ebbing Missouri,8.2
    On the Waterfront,8.2
    Det sjunde inseglet,8.2
    Inside Out,8.2
    The Elephant Man,8.2
    Room,8.2
    The Wolf of Wall Street,8.2
    Mr. Smith Goes to Washington,8.2
    V for Vendetta,8.2
    Warrior,8.2
    Blade Runner,8.2
    Dial M for Murder,8.2
    Smultronstället,8.2
    The General,8.2
    No Country for Old Men,8.1
    Trainspotting,8.2
    There Will Be Blood,8.1
    The Sixth Sense,8.1
    Gone with the Wind,8.2
    The Thing,8.1
    Fargo,8.1
    Gran Torino,8.1
    Roma ,8.3
    The Deer Hunter,8.1
    Finding Nemo,8.1
    Idi i smotri,8.2
    The Big Lebowski,8.1
    Shutter Island,8.1
    Sherlock Jr.,8.2
    Kill Bill: Vol. 1,8.1
    Cool Hand Luke,8.1
    Rebecca,8.1
    Tôkyô monogatari,8.2
    Mary and Max,8.1
    Hacksaw Ridge,8.1
    Gone Girl,8.1
    How to Train Your Dragon,8.1
    Sunrise: A Song of Two Humans,8.2
    Relatos salvajes,8.1
    Jurassic Park,8.1
    Into the Wild,8.1
    Life of Brian,8.1
    In the Name of the Father,8.1
    The Truman Show,8.1
    The Grand Budapest Hotel,8.1
    Platoon,8.1
    Stand by Me,8.1
    It Happened One Night,8.1
    Eskiya ,8.3
    Network,8.1
    Stalker,8.1
    Persona,8.1
    Salinui chueok,8.1
    Ben-Hur,8.1
    Hotel Rwanda,8.1
    12 Years a Slave,8.1
    Million Dollar Baby,8.1
    La passion de Jeanne d'Arc,8.2
    Rush,8.1
    Andrey Rublev,8.2
    Le salaire de la peur,8.1
    Before Sunrise,8.1
    Mad Max: Fury Road,8.1
    Les quatre cents coups,8.1
    Prisoners,8.1
    Hachi: A Dog's Tale,8.1
    Spotlight,8.1
    Logan,8.1
    Rang De Basanti,8.2
    Amores perros,8.1
    The Princess Bride,8.1
    Catch Me If You Can,8.1
    Kaze no tani no Naushika,8.1
    Harry Potter and the Deathly Hallows: Part 2,8.1
    Butch Cassidy and the Sundance Kid,8.1
    Rocky,8.1
    Barry Lyndon,8.1
    Monsters Inc.,8.1
    The Grapes of Wrath,8.1
    The Maltese Falcon,8.1
    Dead Poets Society,8.1
    Donnie Darko,8.1
    The Terminator,8.0
    Gandhi,8.1
    Les diaboliques,8.1
    La haine,8.1
    Groundhog Day,8.0
    The Wizard of Oz,8.0
    Jaws,8.0
    Le notti di Cabiria,8.1
    The Help,8.1
    Faa yeung nin wa,8.1
    Mandariinid,8.2
    Before Sunset,8.1
    Paper Moon,8.1
    Ah-ga-ssi,8.1
    Paris Texas,8.1
    The Best Years of Our Lives,8.1
    Tenkû no shiro Rapyuta,8.1
    Pirates of the Caribbean: The Curse of the Black Pearl,8.0
    Blade Runner 2049,8.0
    La La Land,8.0
    Guardians of the Galaxy,8.1
    Fanny och Alexander,8.1
    Tsubaki Sanjûrô,8.1
    Gangs of Wasseypur,8.2
    Drishyam,8.3`;

    let imdbList = [];

    imdbList = csvToArray(input);
    
    return imdbList;
}

function docTableUpdate(top10List) {
    document.getElementById("top10-1").innerHTML = top10List[0][0];
    document.getElementById("top10-2").innerHTML = top10List[1][0];
    document.getElementById("top10-3").innerHTML = top10List[2][0];
    document.getElementById("top10-4").innerHTML = top10List[3][0];
    document.getElementById("top10-5").innerHTML = top10List[4][0];
    document.getElementById("top10-6").innerHTML = top10List[5][0];
    document.getElementById("top10-7").innerHTML = top10List[6][0];
    document.getElementById("top10-8").innerHTML = top10List[7][0];
    document.getElementById("top10-9").innerHTML = top10List[8][0];
    document.getElementById("top10-10").innerHTML = top10List[9][0];
}

function buttonUpdate(counter, newMovie, top10List) {
    document.getElementById("buttonA").innerHTML = top10List[9-counter][0];
    document.getElementById("buttonB").innerHTML = newMovie[0];
}

function buttonAClick(counter1, newMovCounter1, top10List, imdbTop250) {
    if(newMovCounter1 == 249){
        document.getElementById("buttonA").style.visibility = 'hidden';
        document.getElementById("buttonB").style.visibility = 'hidden';
        document.getElementById("Question").style.visibility = 'hidden';
    }

    counter1 = 0;
    newMovCounter1++;

    counter = counter1;
    newMovCounter = newMovCounter1;

    buttonUpdate(counter, imdbTop250[newMovCounter], top10List);
    docTableUpdate(top10List);
}

function buttonBClick(counter1, newMovCounter1, top10List, imdbTop250) {
    if (counter == 9) {
        top10List.splice(9-counter1,0,imdbTop250[newMovCounter1]);
        top10List.splice(11-counter1, 1);

        docTableUpdate(top10List);

        newMovCounter1++;
        newMovCounter = newMovCounter1;
        counter = 0;

        buttonUpdate(counter, imdbTop250[newMovCounter1], top10List);
        return;
    }
    top10List.splice(9-counter1,0,imdbTop250[newMovCounter1]);
    top10List.splice(11-counter1, 1);

    docTableUpdate(top10List);
    
    counter1++;
    counter = counter1;

    buttonUpdate(counter, imdbTop250[newMovCounter1], top10List);
}


let imdbTop250 = loadMovieDatabase();

for(let i = 0; i<10; i++) {
    let m = [];
    m[0] = "BLANK";
    m[1] = i;
    top10List.push(m);
}

docTableUpdate(top10List);
buttonUpdate(counter, imdbTop250[0], top10List);

document.getElementById("buttonA").addEventListener("click", function() {buttonAClick(counter, newMovCounter, top10List, imdbTop250)});
document.getElementById("buttonB").addEventListener("click", function() {buttonBClick(counter, newMovCounter, top10List, imdbTop250)});