import React, { Component } from 'react';
import $ from 'jquery';
import MovieRow from './MovieRow';
import './App.css';
const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.searchHandler = this.searchHandler.bind(this);
    // console.log('yo');
  
    // const movies = [
    //   {id: 0, cover: 'https://images-na.ssl-images-amazon.com/images/I/514K35AM3KL._SY445_.jpg', title: 'Repoman', year: 1984},
    //   {id: 1, cover: 'https://m.media-amazon.com/images/M/MV5BMjI1MDk4NjE0OV5BMl5BanBnXkFtZTcwMjExODM5NA@@._V1_UY1200_CR84,0,630,1200_AL_.jpg', title: 'Tough Guys Don\'t Dance', year: 1987}
    // ];

    
    // let movieRows = [];
    // movies.forEach((movie) => {
    //   console.log(movie.id);
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(<div key={movie.id}> {movieRow}</div>)
    // })
    // this.state = {rows: movieRows}
  
  this.performSearch();
}

performSearch(term) {
  console.log("perform search using moviedb");
  const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` + term;
  $.ajax({
    url: urlString,
    success: (searchResults) => {
      console.log("fetched data successfully");
      console.log(searchResults);
      const results = searchResults.results;
      // console.log(results[0]);

      let movieRows = [];

      results.forEach((movie) => {
        movie.cover = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
        console.log(movie.title);
        const movieRow = <MovieRow key={movie.id} movie={movie}/>
        movieRows.push(movieRow);
      })
      this.setState({rows: movieRows});
    },
    error: (xhr, status, err) => {
      console.error("failed to fetch data")
    }
  })
}

searchHandler(event) {
  const term = event.target.value;
  this.performSearch(term);
  this.setState({term: event.target.value});
}


  render() {
    return (
      <div>
        <header className="header">
            <ul id="nav-items">
                <li><img width="80" src="/green-image.png" alt="logo"/></li>
                <li id="title"><h1>MoviesDB Search</h1></li>
            </ul>
        </header>

        <input id="input" onChange={this.searchHandler} placeholder="enter search term" value={this.state.term} />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
