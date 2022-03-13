import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const moviePoster = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
	title,
	poster_path,
	overview,
	vote_average,
	release_date,
}) => {
	return (
		<Card className="movie ">
			<Row>
				<Col sm={3}>
					<img
						src={
							poster_path
								? moviePoster + poster_path
								: "https://avatars.githubusercontent.com/u/97225946?v=4"
						}
						alt={title}
					/>
				</Col>
				<Col sm={8}>
					<Card.Body className="movie-body">
						<div className="movie-info">
							<Card.Title>
								<h2>{title}</h2>
							</Card.Title>
							<Card.Text className="movie-smalltext">
								RELEASE DATE : {release_date}
							</Card.Text>
							<Card.Text className="movie-smalltext">
								RATING : {vote_average}
							</Card.Text>

							<Card.Text className="movie-over">
								{overview.substring(0, 150)}...
							</Card.Text>
						</div>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
};

export default Movie;
