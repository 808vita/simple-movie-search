import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { Container } from "react-bootstrap";

// const featuredMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularty.desc&api_key=${process.env.REACT_APP_API_KEY}`;

// const searchMovies = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

const featuredMovies = `https://movie-search-808.herokuapp.com/api/discover`;

const searchMovies = `https://movie-search-808.herokuapp.com/api/search/`;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(`${searchMovies}${searchTerm}`);
			setSearchTerm("");
		}
	};

	useEffect(() => {
		getMovies(featuredMovies);
	}, []);

	const getMovies = (API) => {
		fetch(API, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	};

	return (
		<Container fluid>
			<div className="header-fix">
				<header>
					<h6>MOVIE NAME</h6>
					<form onSubmit={handleOnSubmit}>
						<input
							className="search"
							type="search"
							placeholder="🔍"
							value={searchTerm}
							onChange={handleOnChange}
						/>
						<button
							className="btn btn-dark"
							onSubmit={handleOnSubmit}
							type="submit"
						>
							Search!
						</button>
					</form>
				</header>
			</div>
			<Container fluid className="movie-container">
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</Container>
		</Container>
	);
}

export default App;
