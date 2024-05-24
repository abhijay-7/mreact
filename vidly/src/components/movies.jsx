import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
    state = { movies: getMovies() };
    showInfo() {
        return this.state.movies.length > 0 ? (
            <p>Showing {this.state.movies.length} movies in the database.</p>
        ) : (
            <p>There are no movies in the database</p>
        );
    }
    render() {
        if (this.state.movies.length > 0) {
            return (
                <>
                    {this.showInfo()}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map((movie) => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                deleteMovie(movie._id);
                                                this.setState({
                                                    movie: getMovies(),
                                                });
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            );
        } else return <>{this.showInfo()}</>;
    }
}

export default Movies;
