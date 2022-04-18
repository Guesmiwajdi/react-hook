import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Trailer from "./Components/Trailer/Trailer";
import MovieList from "./Components/MovieList/MovieList";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const MovieData = [
        {
            id: uuidv4(),
            Title: "JOKER",
            Description:
                "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/zAGVQLHvwOY",
            Rating: 4,
        },
        {
            id: uuidv4(),
            Title: "Split",
            Description:
                "Kevin, who is suffering from dissociative identity disorder and has 23 alter egos, kidnaps three teenagers. They must figure out his friendly personas before he unleashes his 24th personality.",
            PosterUrl:
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkXKp2opNa6U_LLo07y_3d_zxZ0xA80OmrdXXOO4bQkkB1Asnc",
            TrailerUrl: "https://www.youtube.com/embed/84TouqfIsiI",
            Rating: 5,
        },
        {
            id: uuidv4(),
            Title: "Parasite",
            Description:
                "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY",
            Rating: 5,
        },
        {
            id: uuidv4(),
            Title: "John Wick Parabellum",
            Description:
                "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX140_CR0,0,140,209_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/pU8-7BX9uxs",
            Rating: 4,
        },

        {
            id: uuidv4(),
            Title: "The Lion King",
            Description:
                "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
            PosterUrl:
                "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg",
            TrailerUrl: "https://www.youtube.com/embed/7TavVZMewpY",
            Rating: 3,
        },
        {
            id: uuidv4(),
            Title: "The Dirt",
            Description:
                "The film is an unflinching tale of success and excess as four misfits rise from the streets of Hollywood to the heights of international fame",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BODhiMzkwYTctYzgwOC00MDM2LWExYjQtMzY4MDljZjQ3M2RmXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/-NOp5ROn1HE",
            Rating: 3,
        },
        {
            id: uuidv4(),
            Title: "Aladdin",
            Description:
                "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/foyufD52aog",
            Rating: 2,
        },
        {
            id: uuidv4(),
            Title: "Cold War",
            Description:
                "In the 1950s, a music director falls in love with a singer and tries to persuade her to flee communist Poland for France.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BNTJmNzExOGItZTQyMi00YzBlLTk0ZTQtNzAxYmUwZDQwZjU4XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_UY209_CR0,0,140,209_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/8ImvkXgGVWw",
            Rating: 2,
        },
        {
            id: uuidv4(),
            Title: "Monster a Go-Go",
            Description:
                "A space capsule crash-lands on Earth, and the astronaut aboard disappears. Is there a connection between the missing man and the monster roaming the area?",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BNjY0OWQ0ZDctNDI4ZC00MTc2LThhOWItYmE2NWQwYjg0OWVjXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX140_CR0,0,140,209_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/bBgpFENBIw0",
            Rating: 1,
        },
        {
            id: uuidv4(),
            Title: "Birdemic: Shock and Terror ",
            Description:
                "A horde of mutated birds descends upon the quiet town . With the death toll rising, Two citizens manage to fight back, but will they survive Birdemic?",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BZTMyNmM1ODYtZmU3OS00NWIwLTg0MWEtNDExY2NlMzYzNTQ4XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR2,0,182,268_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/jE5dJDgZ644",
            Rating: 1,
        },
        {
            id: uuidv4(),
            Title: "Catch me if you can",
            Description:
                "Barely 21 yet, Frank is a skilled forger who has passes as a doctor, lawyer and pilot.FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
            PosterUrl:
                "https://images-na.ssl-images-amazon.com/images/I/81V%2Bb69u3xL._SY445_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/71rDQ7z4eFg",
            Rating: 5,
        },

        {
            id: uuidv4(),
            Title: "300",
            Description:
                "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
            PosterUrl:
                "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",
            TrailerUrl: "https://www.youtube.com/embed/UrIbxk7idYA",
            Rating: 5,
        },
        {
            id: uuidv4(),
            Title: "Saw",
            Description:
                "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
            PosterUrl:
                "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
            TrailerUrl: "https://www.youtube.com/embed/S-1QgOMQ-ls",
            Rating: 4,
        },

        {
            id: uuidv4(),
            Title: "Rocky",
            Description:
                "A small-time boxer gets a supremely rare chance to fight a heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/1057/4964/products/rocky-vintage-movie-poster-original-french-1-panel-47x63.jpg?v=1603947963",
            TrailerUrl: "https://www.youtube.com/embed/7RYpJAUMo2M",
            Rating: 4,
        },
        {
            id: uuidv4(),
            Title: "The Shawshank Redemption",
            Description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",

            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
            Rating: 2,
        },
        {
            id: uuidv4(),
            Title: "Inception",
            Description:
                "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
            Rating: 5,
        },
        {
            id: uuidv4(),
            Title: "Jaws",
            Description:
                "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
            PosterUrl:
                "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            TrailerUrl: "https://www.youtube.com/embed/U1fu_sA7XhE",
            Rating: 3,
        },
    ];
    const [newMovie, setNewMovie] = useState(MovieData);
    const [titleSearch, setTitleSearch] = useState("");
    const [rateSearch, setRateSearch] = useState("0");

    return (
        
        (
            <Router>
                <div className="App">
                    <NavBar
                        setTitleSearch={setTitleSearch}
                        setRateSearch={setRateSearch}
                    />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/movies/:id">
                            <Trailer newMovie={newMovie} />
                        </Route>
                        <Route path="/movies">
                            <MovieList
                                titleSearch={titleSearch}
                                rateSearch={rateSearch}
                                newMovie={newMovie}
                                setNewMovie={setNewMovie}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    );
}

export default App;
