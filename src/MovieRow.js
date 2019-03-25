import React from 'react';

class MovieRow extends React.Component {
    viewMovie() {
        console.log('view movie');
        const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
        window.location.href = url;
    }
    render() {
        return <div class="container">
                    <div key={this.props.movie.id} class="row"> 
                        <div class="col-md-3 mx-auto">
                            <img class="cover-img" width="150" src={this.props.movie.cover} alt="cover"/>
                        </div>
                        <div class="col-md-8">
                            <h5 class="padding-title">{this.props.movie.title}</h5>
                            <h5>Date Released: {this.props.movie.release_date}</h5>
                            <h5 class="text-padding">Rating: {this.props.movie.vote_average}</h5>
                            <p class="text-padding">{this.props.movie.overview}</p>
                            <button id="view" onClick={this.viewMovie.bind(this)} value="view">view</button>
                        </div>
                      
                    </div>
                </div>
    }
}

export default MovieRow;