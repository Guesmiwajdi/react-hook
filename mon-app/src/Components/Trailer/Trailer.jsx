import React from "react";
import "./Trailer.css";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";

function Trailer({ newMovie, match }) {
    let Id = useParams().id;
    let targetMovie = newMovie.find((el) => el.id === Id);
    let nextMovieIndex = newMovie.indexOf(targetMovie) + 1;
    let nextMovie = newMovie[nextMovieIndex];
    let previousMovieIndex = newMovie.indexOf(targetMovie) - 1;
    let previousMovie = newMovie[previousMovieIndex];
    let history = useHistory();

    const handleNextRoute = () => {
        if (nextMovieIndex < newMovie.length) {
            history.push(`/movies/${nextMovie.id}`);
        } else {
            history.push(`/movies`);
        }
    };
    const handlePreviousRoute = () => {
        if (previousMovieIndex >= 0) {
            history.push(`/movies/${previousMovie.id}`);
        } else {
            history.push(`/movies`);
        }
    };

    return (
        console.log(useParams()),
        (
            <div className="trailer">
                <Button className="togglebtn" onClick={handlePreviousRoute}>
                    Previous movie
                </Button>
                <iframe
                    width="560"
                    height="315"
                    src={targetMovie.TrailerUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>{" "}
                <Button
                    className="togglebtn"
                    variant="warning"
                    onClick={handleNextRoute}
                >
                    Next movie
                </Button>
                <h1 style={{ color: "red" }}>{useParams().Title} </h1>
                <p> {targetMovie.Description} </p>
                <Link to="/">
                    <Button variant="danger">Home</Button>
                </Link>
            </div>
        )
    );
}

export default Trailer;
